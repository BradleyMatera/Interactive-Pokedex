import { GENS } from './utils.js';

export function initStore(){
  const state = {
    theme: localStorage.getItem('theme') || 'flat',
    search: '',
    sort: 'id-asc',
    types: new Set(),
    gen: 'all',
    favoritesOnly: false,
    favorites: new Set(JSON.parse(localStorage.getItem('favorites')||'[]')),
  };

  const set = (key, value) => { state[key]=value; listeners.forEach(l=>l(state)); save(); };
  const listeners = new Set();
  const onChange = (fn) => { listeners.add(fn); return ()=> listeners.delete(fn); };
  const save = () => {
    localStorage.setItem('theme', state.theme);
    localStorage.setItem('favorites', JSON.stringify(Array.from(state.favorites)));
  };
  const toggleFavorite = (id) => {
    if(state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
    listeners.forEach(l=>l(state)); save();
  };

  return { state, set, onChange, toggleFavorite, GENS };
}

