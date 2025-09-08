export function initMap(){
  const backFromMapBtn = document.getElementById('back-from-map');
  const openMapBtn = document.getElementById('open-map');
  const mapInfo = document.getElementById('map-info');
  const regionSelect = document.getElementById('region-select');
  openMapBtn?.addEventListener('click', ()=> { history.pushState(null,'', '#/map/kanto'); window.dispatchEvent(new PopStateEvent('popstate')); });
  backFromMapBtn?.addEventListener('click', ()=> history.back());
  document.querySelectorAll('.route').forEach(el=>{
    el.addEventListener('click', ()=>{ const id = el.id.replace(/-/g,' '); if(mapInfo) mapInfo.textContent = `Selected: ${id}`; });
    el.addEventListener('keypress', (e)=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); el.click(); }});
  });
  regionSelect?.addEventListener('change', ()=>{
    // For now, placeholder: update title and a simple message
    if(mapInfo) mapInfo.textContent = `Showing ${regionSelect.value} region.`;
  });
  return {};
}
