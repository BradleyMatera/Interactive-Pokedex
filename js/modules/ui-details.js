import { getPokemon, getSpecies, getEvolutionChainByUrl, getEncounters, getTcgCards } from './api.js';
import { colorOf, pad, primaryType } from './utils.js';

export function initDetails(store){
  const listView = document.getElementById('list-view');
  const details = document.getElementById('pokemon-details');
  const heroImg = document.getElementById('pokemon-image');
  const pokemonNameEl = document.getElementById('pokemon-name');
  const typeChips = document.getElementById('type-chips');
  const detailNumber = document.getElementById('detail-number');
  const detailWeight = document.getElementById('detail-weight');
  const detailHeight = document.getElementById('detail-height');
  const detailAbility = document.getElementById('detail-ability');
  const statsContainer = document.getElementById('stats');
  const evolutionChainDiv = document.getElementById('evolution-chain');
  const tcgCards = document.getElementById('tcg-cards');
  const backBtn = document.getElementById('back-to-list');
  const favBtn = document.getElementById('fav-btn');

  const buttons = {
    desc: document.getElementById('tab-desc'),
    evo: document.getElementById('tab-evo'),
    moves: document.getElementById('tab-moves'),
    breed: document.getElementById('tab-breed'),
    loc: document.getElementById('tab-loc')
  };
  const panels = {
    desc: document.getElementById('panel-desc'),
    evo: document.getElementById('panel-evo'),
    moves: document.getElementById('panel-moves'),
    breed: document.getElementById('panel-breed'),
    loc: document.getElementById('panel-loc')
  };

  function setActiveTab(key){
    Object.keys(buttons).forEach(k=> buttons[k].setAttribute('aria-selected', String(k===key)));
    Object.keys(panels).forEach(k=> panels[k].classList.toggle('active', k===key));
  }

  backBtn?.addEventListener('click', ()=> { history.pushState(null,'', '#/pokedex'); window.dispatchEvent(new PopStateEvent('popstate')); });

  async function showDetails(name){
    const p = await getPokemon(name);
    const type = primaryType(p);
    const hero = details.querySelector('.details-hero');
    hero.style.background = `linear-gradient(180deg, ${colorOf(type)}, ${colorOf(type)} 60%, ${colorOf(type)}aa)`;
    detailNumber.textContent = `#${pad(p.id)}`;
    pokemonNameEl.textContent = p.name;
    heroImg.src = p.sprites.other['official-artwork'].front_default || p.sprites.front_default;

    // chips
    typeChips.innerHTML = '';
    p.types.forEach(t=>{ 
      const s = document.createElement('span'); 
      s.className = `type-chip type-${t.type.name}`; 
      s.textContent = t.type.name; 
      typeChips.appendChild(s); 
    });
    // about
    detailWeight.textContent = `${(p.weight/10).toFixed(1)} kg`;
    detailHeight.textContent = `${(p.height/10).toFixed(1)} m`;
    detailAbility.textContent = p.abilities?.[0]?.ability?.name || '—';
    // stats
    statsContainer.innerHTML = '';
    p.stats.forEach(s=>{
      const row = document.createElement('div'); row.className='stat-row mb-2';
      const name = document.createElement('div'); name.className='stat-name'; name.textContent = s.stat.name.replace('special-','s.');
      const val = document.createElement('div'); val.className='stat-value'; val.textContent = s.base_stat;
      const bar = document.createElement('div'); bar.className='stat-bar'; const fill = document.createElement('span'); fill.style.background = colorOf(type); fill.style.width='0%'; bar.appendChild(fill);
      row.append(name,val,bar); statsContainer.appendChild(row);
      gsap.to(fill, { width: `${Math.min(100,(s.base_stat/180)*100)}%`, duration:.8, ease:'power2.out' });
    });

    // species / evo / breeding
    const species = await getSpecies(p.id);
    const flavor = species.flavor_text_entries?.find(e=>e.language.name==='en');
    document.getElementById('pokemon-description').textContent = flavor ? flavor.flavor_text.replace(/[\f\n]/g,' ') : '';
    const evo = await getEvolutionChainByUrl(species.evolution_chain.url);
    evolutionChainDiv.innerHTML = '';
    const createStep = (step) => {
      const id = step.species.url.split('/').filter(Boolean).pop();
      const wrap = document.createElement('div'); wrap.className='flex items-center gap-3';
      const card = document.createElement('div'); card.className='flex flex-col items-center';
      const img = document.createElement('img'); img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`; img.width=72; img.height=72; img.alt=step.species.name; img.className='rounded-full bg-white p-2 shadow';
      const name = document.createElement('div'); name.className='text-xs font-semibold capitalize mt-1'; name.textContent = step.species.name; card.append(img,name); wrap.appendChild(card); evolutionChainDiv.appendChild(wrap);
      if (step.evolves_to && step.evolves_to.length){ const arrow = document.createElement('i'); arrow.className='fa-solid fa-chevron-right text-gray-300 text-lg'; evolutionChainDiv.appendChild(arrow); createStep(step.evolves_to[0]); }
    };
    createStep(evo.chain);

    // breeding
    const breeding = document.getElementById('breeding');
    const male = species.gender_rate === -1 ? '—' : `${Math.round((8 - species.gender_rate)/8*100)}% ♂`;
    const female = species.gender_rate === -1 ? '—' : `${Math.round(species.gender_rate/8*100)}% ♀`;
    breeding.innerHTML = `
      <div><div class="text-gray-500 text-xs">Egg Groups</div><div class="font-semibold capitalize">${species.egg_groups.map(g=>g.name).join(', ')||'—'}</div></div>
      <div><div class="text-gray-500 text-xs">Hatch Counter</div><div class="font-semibold">${species.hatch_counter ?? '—'}</div></div>
      <div><div class="text-gray-500 text-xs">Gender</div><div class="font-semibold">${male} / ${female}</div></div>
      <div><div class="text-gray-500 text-xs">Growth</div><div class="font-semibold capitalize">${species.growth_rate?.name || '—'}</div></div>
    `;

    // moves
    const movesList = document.getElementById('moves-list');
    const byMethod = { 'level-up': [], machine: [], tutor: [], egg: [] };
    p.moves.forEach(m=>{
      const d = m.version_group_details?.[m.version_group_details.length-1];
      if(!d) return; const method = d.move_learn_method.name;
      const entry = { name: m.move.name, level: d.level_learned_at };
      if(byMethod[method]) byMethod[method].push(entry);
    });
    const section = (title, arr)=> arr.length? `<div class="mt-3"><div class="font-bold mb-1">${title}</div>`+arr.sort((a,b)=>(a.level||0)-(b.level||0)).map(it=>`<div class=\"flex justify-between border-b border-gray-100 py-1\"><span class=\"capitalize\">${it.name.replace(/-/g,' ')}<\/span><span class=\"text-gray-500\">${it.level? 'Lvl '+it.level:''}<\/span><\/div>`).join('')+`</div>` : '';
    movesList.innerHTML = [
      section('Level-up', byMethod['level-up']),
      section('TM/HM (Machine)', byMethod['machine']),
      section('Tutor', byMethod['tutor']),
      section('Egg', byMethod['egg'])
    ].join('');

    // locations
    const locations = document.getElementById('locations');
    try {
      const enc = await getEncounters(p.id);
      if(enc.length){
        const unique = Array.from(new Set(enc.map(e=>e.location_area.name.replace(/-/g,' ')))).slice(0,20);
        locations.innerHTML = unique.map(n=>`<div class=\"py-1 border-b border-gray-100 capitalize\">${n}<\/div>`).join('');
      } else { locations.textContent = 'No encounter data available.'; }
    } catch { locations.textContent = 'Failed to load locations.'; }

    // tcg
    const tcg = await getTcgCards(p.name); tcgCards.innerHTML='';
    tcg.data.slice(0,8).forEach(c=>{ const i = document.createElement('img'); i.src=c.images.small; i.alt=c.name; i.width=100; i.height=140; i.className='rounded-lg shadow-md'; tcgCards.appendChild(i); });

    listView.classList.add('hidden'); details.classList.remove('hidden'); window.scrollTo({top:0});
    setActiveTab('desc');

    // favorite button state
    const fav = store.state.favorites.has(p.id);
    favBtn.setAttribute('aria-pressed', String(fav));
    favBtn.innerHTML = `<i class="${fav ? 'fa-solid' : 'fa-regular'} fa-star"></i>`;
    favBtn.onclick = () => {
      store.toggleFavorite(p.id);
      const now = store.state.favorites.has(p.id);
      favBtn.setAttribute('aria-pressed', String(now));
      favBtn.innerHTML = `<i class="${now ? 'fa-solid' : 'fa-regular'} fa-star"></i>`;
    };
  }

  return { showDetails };
}
