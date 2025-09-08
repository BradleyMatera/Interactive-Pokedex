import { getAllPokemonList, getPokemon } from './api.js';
import { TYPE_COLOR, colorOf, pad, debounce } from './utils.js';

const PAGE = 36;           // cards per batch
const RENDER_LIMIT = 144;  // virtual window size

export function initList(store){
  const grid = document.getElementById('pokedex-grid');
  const sentinel = document.getElementById('infinite-sentinel');
  const search = document.getElementById('search-bar');
  const clear = document.getElementById('clear-search');
  const sortSelect = document.getElementById('sort-select');
  const typeFilters = document.getElementById('type-filters');
  const genFilters = document.getElementById('gen-filters');
  const favToggle = document.getElementById('fav-toggle') || document.getElementById('fav-toggle-drawer');
  const favStrip = document.getElementById('favorites-strip');

  let allList = [];
  let viewList = []; // filtered ids
  let cursor = 0;
  let loading = false;
  const cache = new Map();
  const typeIndex = new Map(); // type -> Set(ids)

  async function getIdsForType(t){
    if(typeIndex.has(t)) return typeIndex.get(t);
    const res = await fetch(`https://pokeapi.co/api/v2/type/${t}`);
    const data = await res.json();
    const ids = new Set(data.pokemon.map(p=> Number(p.pokemon.url.split('/').filter(Boolean).pop())));
    typeIndex.set(t, ids); return ids;
  }

  const imgObserver = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ const img=e.target; img.src = img.dataset.src; imgObserver.unobserve(img); }
    })
  }, { rootMargin:'200px' });

  const renderCard = (p) => {
    const card = document.createElement('button');
    card.className = 'grid-card rounded-2xl p-4 relative overflow-hidden text-left focus:ring-2 focus:ring-indigo-500';
    card.id = `pokemon-${p.id}`;
    card.setAttribute('role','listitem');
    const art = p.sprites?.other?.['official-artwork']?.front_default || p.sprites?.front_default;

    const numberEl = document.createElement('div'); numberEl.className='pk-number absolute right-3 top-2'; numberEl.textContent = `#${pad(p.id)}`;
    const title = document.createElement('h3'); title.className = 'capitalize font-extrabold text-lg'; title.textContent = p.name;
    const chipWrap = document.createElement('div'); chipWrap.className='mt-1 flex gap-1';
    (p.types||[]).forEach(t=>{
      const s = document.createElement('span');
      s.className = `type-chip type-${t.type.name}`;
      s.textContent = t.type.name;
      chipWrap.appendChild(s);
    });
    const img = document.createElement('img'); img.className='thumb absolute right-2 bottom-2'; img.alt=p.name; img.setAttribute('loading','lazy'); img.dataset.src = art; imgObserver.observe(img);
    card.append(numberEl, title, chipWrap, img);
    card.addEventListener('click', ()=> { history.pushState(null,'', `#/pokedex/${p.name}`); window.dispatchEvent(new PopStateEvent('popstate')); });
    grid.appendChild(card);
  };

  const loadBatch = async () => {
    if (loading) return; loading = true;
    const slice = viewList.slice(cursor, cursor+PAGE);
    const requests = slice.map(async entry => {
      if(cache.has(entry.id)) return cache.get(entry.id);
      const data = await getPokemon(entry.id);
      cache.set(entry.id, data); return data;
    });
    const results = await Promise.all(requests);
    results.forEach(renderCard);
    cursor += PAGE;
    // Virtualize: trim older nodes
    const nodes = grid.querySelectorAll('[id^="pokemon-"]');
    if (nodes.length > RENDER_LIMIT) {
      const removeCount = nodes.length - RENDER_LIMIT;
      for(let i=0;i<removeCount;i++){ nodes[i].remove(); }
    }
    loading = false;
  };

  const applyFilters = async () => {
    const term = store.state.search.toLowerCase();
    const [start,end] = store.GENS.find(g=>g.key===store.state.gen)?.range || [1,1010];
    const favOnly = store.state.favoritesOnly;
    viewList = allList.filter(x => x.id >= start && x.id <= end);
    if (term) {
      if (/^#?\d+$/.test(term)) {
        const id = Number(term.replace('#','')); viewList = viewList.filter(x=> x.id === id);
      } else {
        viewList = viewList.filter(x=> x.name.includes(term));
      }
    }
    if (store.state.types.size){
      // union of selected types
      let union = new Set();
      for(const t of store.state.types){ const ids = await getIdsForType(t); ids.forEach(id=> union.add(id)); }
      viewList = viewList.filter(x=> union.has(x.id));
    }
    if (favOnly) viewList = viewList.filter(x=> store.state.favorites.has(x.id));
    switch(store.state.sort){
      case 'name-asc': viewList.sort((a,b)=> a.name.localeCompare(b.name)); break;
      case 'name-desc': viewList.sort((a,b)=> b.name.localeCompare(a.name)); break;
      case 'id-desc': viewList.sort((a,b)=> b.id-a.id); break;
      default: viewList.sort((a,b)=> a.id-b.id); break;
    }
    // reset
    grid.innerHTML = '';
    cursor = 0; loadBatch();
    renderFavoritesStrip();
  };

  const renderTypeFilterChips = () => {
    if(!typeFilters) return;
    typeFilters.innerHTML = '';
    const types = Object.keys(TYPE_COLOR);
    const allBtn = document.createElement('button'); allBtn.className='type-chip'; allBtn.textContent='All';
    allBtn.setAttribute('aria-pressed', String(store.state.types.size===0));
    allBtn.addEventListener('click', ()=> { store.state.types.clear(); renderTypeFilterChips(); applyFilters(); });
    typeFilters.appendChild(allBtn);
    types.forEach(t=>{
      const selected = store.state.types.has(t);
      const b = document.createElement('button'); b.className=`type-chip type-${t}`; b.textContent=t;
      b.setAttribute('aria-pressed', String(selected));
      b.addEventListener('click', ()=>{ store.state.types.has(t)? store.state.types.delete(t) : store.state.types.add(t); renderTypeFilterChips(); applyFilters(); });
      typeFilters.appendChild(b);
    })
  };

  const renderGenChips = () => {
    if(!genFilters) return; genFilters.innerHTML='';
    store.GENS.forEach(g=>{
      const b = document.createElement('button'); b.className='type-chip'; b.textContent=g.label; b.setAttribute('aria-pressed', String(store.state.gen===g.key));
      b.addEventListener('click', ()=>{ store.set('gen', g.key); applyFilters(); renderGenChips(); });
      genFilters.appendChild(b);
    });
  };

  // Observers
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) loadBatch(); });
  }, { rootMargin: '800px' });
  if (sentinel) io.observe(sentinel);

  // Inputs
  const onSearch = debounce(()=> { store.set('search', search.value.trim()); }, 200);
  search?.addEventListener('input', onSearch);
  clear?.addEventListener('click', ()=> { search.value=''; store.set('search',''); });
  sortSelect?.addEventListener('change', ()=> store.set('sort', sortSelect.value));
  favToggle?.addEventListener('click', ()=> { const next = !store.state.favoritesOnly; store.set('favoritesOnly', next); favToggle.setAttribute('aria-pressed', String(next)); });

  // react to state
  store.onChange(()=> applyFilters());

  // Initial bootstrap
  (async () => {
    allList = await getAllPokemonList();
    renderTypeFilterChips();
    renderGenChips();
    await applyFilters();
  })();

  const renderFavoritesStrip = () => {
    if(!favStrip) return;
    const ids = Array.from(store.state.favorites);
    if(!ids.length){ favStrip.classList.add('hidden'); favStrip.innerHTML=''; return; }
    favStrip.classList.remove('hidden');
    favStrip.innerHTML = '';
    ids.slice(0,30).forEach(async id=>{
      const data = cache.get(id) || await getPokemon(id); cache.set(id, data);
      const pill = document.createElement('button'); pill.className='fav-pill'; pill.title = data.name;
      const img = document.createElement('img'); img.src = data.sprites.front_default || data.sprites.other['official-artwork'].front_default; img.alt=data.name;
      const text = document.createElement('span'); text.className='capitalize text-sm'; text.textContent=data.name;
      pill.append(img,text); pill.addEventListener('click', ()=> { history.pushState(null,'', `#/pokedex/${data.name}`); window.dispatchEvent(new PopStateEvent('popstate')); });
      favStrip.appendChild(pill);
    });
  };

  return { applyFilters };
}
