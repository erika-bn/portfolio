// Destaca o link ativo no menu
const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu__link').forEach(a => {
  const file = (a.getAttribute('href') || '').split('/').pop();
  if (file === current) a.classList.add('ativo');
  else a.classList.remove('ativo');
});
