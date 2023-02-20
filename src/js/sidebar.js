export const sidebarBtn = () => {
  const sidebarOpen = document.querySelector('.intro__sidebar-btn-open');
  const sidebarClose = document.querySelector('.intro__sidebar-btn-close');
  const sidebar = document.querySelector('.sidebar');

  sidebarOpen.addEventListener('click', () => {
    sidebarOpen.classList.add('active');
    sidebarClose.classList.add('active');
    sidebar.classList.add('active');
  });

  sidebarClose.addEventListener('click', () => {
    sidebarOpen.classList.remove('active');
    sidebarClose.classList.remove('active');
    sidebar.classList.remove('active');
  });
};
