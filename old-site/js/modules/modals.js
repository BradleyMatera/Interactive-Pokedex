export function initModals(){
  const openers = [
    ['btn-search','modal-search'],
  ];
  openers.forEach(([btnId, modalId])=>{
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    if(!btn || !modal) return;
    const closeBtn = modal.querySelector('.modal-close');
    const close = ()=> modal.classList.add('hidden');
    const open = ()=> { modal.classList.remove('hidden'); modal.querySelector('button, input, select')?.focus(); };
    btn.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    modal.addEventListener('click', (e)=>{ if(e.target === modal) close(); });
    modal.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });
  });

  // Drawer (Filters)
  const drawerBtn = document.getElementById('btn-filters');
  const drawer = document.getElementById('drawer-filters');
  const drawerClose = drawer?.querySelector('.drawer-close');
  const drawerApply = drawer?.querySelector('#drawer-apply');
  const openDrawer = ()=> drawer?.classList.remove('hidden');
  const closeDrawer = ()=> drawer?.classList.add('hidden');
  drawerBtn?.addEventListener('click', openDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  drawerApply?.addEventListener('click', closeDrawer);
  drawer?.addEventListener('click', (e)=>{ if(e.target === drawer) closeDrawer(); });
  drawer?.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeDrawer(); });
}
