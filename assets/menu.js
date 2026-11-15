const menu = document.querySelector('.menu');
const button = document.querySelector('.menu-toggle');
if (menu && button) {
  menu.classList.add('menu-ready');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }
  });
}
