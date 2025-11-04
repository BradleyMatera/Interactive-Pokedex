// API wrappers with simple localStorage cache
const BASE = 'https://pokeapi.co/api/v2';
const TCG = 'https://api.pokemontcg.io/v2';

const getCache = k => { try{ const v = localStorage.getItem(k); return v? JSON.parse(v): null; }catch{ return null; } };
const setCache = (k,v) => { try{ localStorage.setItem(k, JSON.stringify(v)); }catch{} };

let pokemonMap = null;
let loadingPromise = null;
async function loadData() {
  if (pokemonMap) return pokemonMap;
  if (loadingPromise) return await loadingPromise;
  loadingPromise = (async () => {
    const res = await fetch('./data.json');
    const data = await res.json();
    pokemonMap = new Map();
    data.forEach(p => {
      pokemonMap.set(p.id, p);
      pokemonMap.set(p.name, p);
    });
    return pokemonMap;
  })();
  return await loadingPromise;
}

export async function getAllPokemonList() {
  const key = 'all:list:v1';
  const c = getCache(key); if (c) return c;
  const map = await loadData();
  const list = Array.from(map.values()).map(p => ({
    id: p.id,
    name: p.name,
    url: `${BASE}/pokemon/${p.id}`
  })).sort((a,b) => a.id - b.id);
  setCache(key, list);
  return list;
}

export async function getPokemon(idOrName){
  const key = `pokemon:${idOrName}`; const c = getCache(key); if(c) return c;
  const map = await loadData();
  let data = map.get(idOrName); // Try by name or id (since both are keys)
  if (!data && !isNaN(Number(idOrName))) {
    data = map.get(Number(idOrName));
  }
  if (data) {
    setCache(key, data);
    return data;
  }
  // Fallback to API if not found
  const res = await fetch(`${BASE}/pokemon/${idOrName}`); const fallback = await res.json(); setCache(key, fallback); return fallback;
}

export async function getSpecies(id){
  const key = `species:${id}`; const c = getCache(key); if(c) return c;
  const map = await loadData();
  const data = map.get(Number(id))?.species;
  if (data) {
    setCache(key, data);
    return data;
  }
  // Fallback
  const res = await fetch(`${BASE}/pokemon-species/${id}`); const fallback = await res.json(); setCache(key, fallback); return fallback;
}

export async function getEvolutionChainByUrl(url){
  const id = url.split('/').filter(Boolean).pop(); const key = `evo:${id}`; const c = getCache(key); if(c) return c;
  // Since evolution is per species, but to keep simple, fallback to fetch
  const res = await fetch(url); const data = await res.json(); setCache(key,data); return data;
}

export async function getEncounters(id){
  const key = `enc:${id}`; const c = getCache(key); if(c) return c;
  const map = await loadData();
  const data = map.get(Number(id))?.encounters;
  if (data) {
    setCache(key, data);
    return data;
  }
  // Fallback
  const res = await fetch(`${BASE}/pokemon/${id}/encounters`); const fallback = await res.json(); setCache(key, fallback); return fallback;
}

export async function getTcgCards(name){
  try{
    const key = `tcg:${name}`; const c = getCache(key); if(c) return c;
    const res = await fetch(`${TCG}/cards?q=name:${name}&pageSize=10`); const data = await res.json(); setCache(key,data); return data;
  }catch{ return { data:[] }; }
}

// Keep getMove, getLocationAreaByUrl, getLocationByUrl as is, since they are not preloaded

export async function getMove(idOrName){
  const key = `move:${idOrName}`; const c = getCache(key); if(c) return c;
  const res = await fetch(`${BASE}/move/${idOrName}`);
  const data = await res.json();
  setCache(key, data);
  return data;
}

export async function getLocationAreaByUrl(url){
  const key = `locarea:${url}`;
  const c = getCache(key); if(c) return c;
  const res = await fetch(url);
  const data = await res.json();
  setCache(key, data);
  return data;
}

export async function getLocationByUrl(url){
  const key = `location:${url}`;
  const c = getCache(key); if(c) return c;
  const res = await fetch(url);
  const data = await res.json();
  setCache(key, data);
  return data;
}
