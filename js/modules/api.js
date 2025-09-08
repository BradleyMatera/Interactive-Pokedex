// API wrappers with simple localStorage cache
const BASE = 'https://pokeapi.co/api/v2';
const TCG = 'https://api.pokemontcg.io/v2';

const getCache = k => { try{ const v = localStorage.getItem(k); return v? JSON.parse(v): null; }catch{ return null; } };
const setCache = (k,v) => { try{ localStorage.setItem(k, JSON.stringify(v)); }catch{} };

export async function getAllPokemonList() {
  const key = 'all:list:v1';
  const c = getCache(key); if (c) return c;
  const res = await fetch(`${BASE}/pokemon?limit=2000`);
  const data = await res.json();
  // map to {id,name,url}
  const list = data.results.map(r => {
    const parts = r.url.split('/').filter(Boolean); const id = Number(parts.pop());
    return { id, name:r.name, url:r.url };
  }).filter(x=> x.id <= 1010);
  setCache(key, list);
  return list;
}

export async function getPokemon(idOrName){
  const key = `pokemon:${idOrName}`; const c = getCache(key); if(c) return c;
  const res = await fetch(`${BASE}/pokemon/${idOrName}`); const data = await res.json(); setCache(key,data); return data;
}

export async function getSpecies(id){
  const key = `species:${id}`; const c = getCache(key); if(c) return c;
  const res = await fetch(`${BASE}/pokemon-species/${id}`); const data = await res.json(); setCache(key,data); return data;
}

export async function getEvolutionChainByUrl(url){
  const id = url.split('/').filter(Boolean).pop(); const key = `evo:${id}`; const c = getCache(key); if(c) return c;
  const res = await fetch(url); const data = await res.json(); setCache(key,data); return data;
}

export async function getEncounters(id){
  const key = `enc:${id}`; const c = getCache(key); if(c) return c;
  const res = await fetch(`${BASE}/pokemon/${id}/encounters`); const data = await res.json(); setCache(key,data); return data;
}

export async function getTcgCards(name){
  try{
    const key = `tcg:${name}`; const c = getCache(key); if(c) return c;
    const res = await fetch(`${TCG}/cards?q=name:${name}&pageSize=10`); const data = await res.json(); setCache(key,data); return data;
  }catch{ return { data:[] }; }
}

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
