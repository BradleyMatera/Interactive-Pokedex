export const TYPE_COLOR = {
  bug: 'var(--bug)', dark: 'var(--dark)', dragon: 'var(--dragon)', electric: 'var(--electric)', fairy: 'var(--fairy)',
  fighting: 'var(--fighting)', fire: 'var(--fire)', flying: 'var(--flying)', ghost: 'var(--ghost)', grass: 'var(--grass)',
  ground: 'var(--ground)', ice: 'var(--ice)', normal: 'var(--normal)', poison: 'var(--poison)', psychic: 'var(--psychic)',
  rock: 'var(--rock)', steel: 'var(--steel)', water: 'var(--water)'
};
export const pad = n => String(n).padStart(3,'0');
export const primaryType = p => p.types?.[0]?.type?.name || 'normal';
export const colorOf = type => TYPE_COLOR[type] || 'var(--normal)';

export const GENS = [
  { key:'all', label:'All', range:[1, 1010] },
  { key:'gen1', label:'Gen 1', range:[1,151] },
  { key:'gen2', label:'Gen 2', range:[152,251] },
  { key:'gen3', label:'Gen 3', range:[252,386] },
  { key:'gen4', label:'Gen 4', range:[387,493] },
  { key:'gen5', label:'Gen 5', range:[494,649] },
  { key:'gen6', label:'Gen 6', range:[650,721] },
  { key:'gen7', label:'Gen 7', range:[722,809] },
  { key:'gen8', label:'Gen 8', range:[810,905] },
  { key:'gen9', label:'Gen 9', range:[906,1010] },
];

export const debounce = (fn, ms=200) => {
  let t; return (...args)=>{ clearTimeout(t); t = setTimeout(()=> fn(...args), ms); };
};

