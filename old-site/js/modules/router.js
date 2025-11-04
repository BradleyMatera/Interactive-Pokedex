export function initRouter(ctx){
  const { details, list, store } = ctx;
  async function handle(){
    const hash = location.hash || '#/pokedex';
    if (hash.startsWith('#/pokedex/')){
      const name = decodeURIComponent(hash.split('/').pop());
      document.body.classList.add('details-mode');
      await details.showDetails(name);
      return;
    }
    if (hash.startsWith('#/map/')){
      document.body.classList.remove('details-mode');
      document.getElementById('pokemon-details').classList.add('hidden');
      document.getElementById('list-view').classList.add('hidden');
      document.getElementById('map-view').classList.remove('hidden');
      return;
    }
    // default grid
    document.body.classList.remove('details-mode');
    document.getElementById('pokemon-details').classList.add('hidden');
    document.getElementById('map-view').classList.add('hidden');
    document.getElementById('list-view').classList.remove('hidden');
  }
  window.addEventListener('popstate', handle);
  window.addEventListener('hashchange', handle);
  document.getElementById('home-btn')?.addEventListener('click', ()=> { history.pushState(null,'', '#/pokedex'); handle(); });
  handle();
}
