export function initTheme(){
  const select = document.getElementById('theme-select');
  const setTheme = (key) => {
    document.body.classList.remove('theme-8bit','theme-flat','theme-neon','theme-gb');
    switch(key){
      case '8bit': document.body.classList.add('theme-8bit'); break;
      case 'neon': document.body.classList.add('theme-neon'); break;
      case 'gb': document.body.classList.add('theme-gb'); break;
      default: document.body.classList.add('theme-flat'); break;
    }
    localStorage.setItem('theme', key);
  };
  const initial = localStorage.getItem('theme') || 'flat';
  if(select){ select.value = initial; select.addEventListener('change', ()=> setTheme(select.value)); }
  setTheme(initial);
}

