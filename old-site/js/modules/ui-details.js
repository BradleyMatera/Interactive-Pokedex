import { getPokemon, getSpecies, getEvolutionChainByUrl, getEncounters, getTcgCards, getMove, getLocationAreaByUrl, getLocationByUrl } from './api.js';
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

  // Wire tab interactions (click + arrow key navigation)
  Object.entries(buttons).forEach(([key, btn])=>{
    if(!btn) return;
    btn.addEventListener('click', ()=> setActiveTab(key));
    btn.addEventListener('keydown', (e)=>{
      if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const order = Object.keys(buttons);
      const idx = order.indexOf(key);
      const nextIdx = e.key === 'ArrowRight' ? (idx+1)%order.length : (idx-1+order.length)%order.length;
      const nextKey = order[nextIdx];
      setActiveTab(nextKey);
      buttons[nextKey]?.focus();
    });
  });

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
    const list = document.createElement('div'); list.className = 'evo-list'; evolutionChainDiv.appendChild(list);

    const evoDetailLabel = (d) => {
      if(!d) return '';
      const trig = d.trigger?.name;
      if (trig === 'level-up') {
        if (d.min_level) return `Lvl ${d.min_level}`;
        if (d.min_happiness) return 'High Friendship';
        if (d.time_of_day) return `Level (${d.time_of_day})`;
        if (d.known_move) return `Level with ${d.known_move.name.replace(/-/g,' ')}`;
        if (d.known_move_type) return `Level with ${d.known_move_type.name} move`;
        return 'Level up';
      }
      if (trig === 'use-item' && d.item) return `Use ${d.item.name.replace(/-/g,' ')}`;
      if (trig === 'trade') {
        if (d.held_item) return `Trade holding ${d.held_item.name.replace(/-/g,' ')}`;
        return 'Trade';
      }
      return (trig || '').replace(/-/g,' ');
    };

    const pushStep = (node) => {
      const id = node.species.url.split('/').filter(Boolean).pop();
      const step = document.createElement('div'); step.className = 'evo-step';
      const img = document.createElement('img'); img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`; img.alt = node.species.name;
      const name = document.createElement('div'); name.className = 'name'; name.textContent = node.species.name;
      step.append(img, name);
      list.appendChild(step);
    };

    const walk = (node) => {
      pushStep(node);
      if (node.evolves_to && node.evolves_to.length){
        const next = node.evolves_to[0];
        const d = next.evolution_details?.[0];
        const arrow = document.createElement('div'); arrow.className = 'evo-arrow';
        arrow.innerHTML = `<i class="fa-solid fa-chevron-right"></i><span class="label">${evoDetailLabel(d)}</span>`;
        list.appendChild(arrow);
        walk(next);
      }
    };
    walk(evo.chain);

    // breeding (enhanced grid)
    const breeding = document.getElementById('breeding');
    breeding.className = 'breeding-grid';
    const male = species.gender_rate === -1 ? '—' : `${Math.round((8 - species.gender_rate)/8*100)}% ♂`;
    const female = species.gender_rate === -1 ? '—' : `${Math.round(species.gender_rate/8*100)}% ♀`;
    breeding.innerHTML = `
      <div class="label">Egg Groups</div><div class="value capitalize">${species.egg_groups.map(g=>g.name.replace(/-/g,' ')).join(', ')||'—'}</div>
      <div class="label">Hatch Counter</div><div class="value">${species.hatch_counter ?? '—'}</div>
      <div class="label">Gender</div><div class="value">${male} / ${female}</div>
      <div class="label">Growth</div><div class="value capitalize">${species.growth_rate?.name?.replace(/-/g,' ') || '—'}</div>
      <div class="label">Capture Rate</div><div class="value">${species.capture_rate ?? '—'}</div>
      <div class="label">Base Happiness</div><div class="value">${species.base_happiness ?? '—'}</div>
    `;

    // moves (enhanced: show Level-up moves with type, power, acc, pp)
    const movesList = document.getElementById('moves-list');
    movesList.className = 'move-list';
    const levelMoves = [];
    p.moves.forEach(m=>{
      const d = m.version_group_details?.[m.version_group_details.length-1];
      if(!d) return;
      if (d.move_learn_method.name === 'level-up'){
        levelMoves.push({ name: m.move.name, level: d.level_learned_at });
      }
    });
    levelMoves.sort((a,b)=>(a.level||0)-(b.level||0));
    const top = levelMoves.slice(0, 20);
    const moveDetails = p.moveDetails || await Promise.all(top.map(m=> getMove(m.name).catch(()=>null)));
    movesList.innerHTML = '';
    const header = document.createElement('div'); header.className = 'move-row';
    header.innerHTML = '<div class="name">Move</div><div>Type</div><div>Power</div><div>Acc</div><div>PP</div>';
    movesList.appendChild(header);
    top.forEach((m, i)=>{
      const d = moveDetails[i];
      const type = d?.type?.name || 'normal';
      const row = document.createElement('div'); row.className = 'move-row';
      const nameEl = document.createElement('div'); nameEl.className = 'name'; nameEl.textContent = m.name.replace(/-/g,' ');
      const badge = document.createElement('span'); badge.className = `type-badge type-${type}`; badge.textContent = type;
      const power = document.createElement('div'); power.textContent = d?.power ?? '—';
      const acc = document.createElement('div'); acc.textContent = d?.accuracy ? `${d.accuracy}%` : '—';
      const pp = document.createElement('div'); pp.textContent = d?.pp ?? '—';
      row.append(nameEl, badge, power, acc, pp);
      movesList.appendChild(row);
    });

    // locations (enhanced: resolve areas -> location -> region)
    const locations = document.getElementById('locations');
    try {
      const enc = await getEncounters(p.id);
      if(!enc.length){
        locations.textContent = 'No encounter data available.';
      } else {
        const urls = [];
        const seen = new Set();
        for(const e of enc){
          const name = e.location_area.name;
          if(!seen.has(name)){ seen.add(name); urls.push(e.location_area.url); }
          if(urls.length >= 10) break;
        }
        const areas = await Promise.all(urls.map(u=> getLocationAreaByUrl(u).catch(()=>null)));
        const locs = await Promise.all(areas.map(a=> a? getLocationByUrl(a.location.url).catch(()=>null) : null));
        const regions = Array.from(new Set(locs.map(l=> l?.region?.name).filter(Boolean)));
        const chips = regions.map(r=> `<span class="region-chip">${r.replace(/-/g,' ')}</span>`).join(' ');
        const list = document.createElement('div'); list.className = 'loc-list';
        list.innerHTML = areas.map((a, idx) => {
          if(!a) return '';
          const loc = locs[idx];
          const areaName = a.names?.find(n=>n.language.name==='en')?.name || a.name.replace(/-/g,' ');
          const region = loc?.region?.name?.replace(/-/g,' ') || '—';
          return `<div class="loc-item"><span class="capitalize">${areaName}</span><span class="region-chip">${region}</span></div>`;
        }).join('');
        locations.innerHTML = chips;
        const mini = document.createElement('div'); mini.className = 'mini-map';
        const labels = areas.map(a => (a?.names?.find(n=>n.language.name==='en')?.name || a?.name?.replace(/-/g,' ') || '')).slice(0,5);
        const regionLabel = (regions[0] || 'region').replace(/-/g,' ');
        mini.innerHTML = `<svg viewBox="0 0 400 160" role="img" aria-label="${regionLabel} map"><rect x="0" y="0" width="400" height="160" rx="12" fill="#E6F0FF"></rect>${labels.map((label,i)=>`<circle cx="${40 + i*70}" cy="${80 + (i%2? -24: 24)}" r="10" fill="#ef4444"></circle>`).join('')}</svg>`;
        locations.appendChild(mini);
        locations.appendChild(list);
      }
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
