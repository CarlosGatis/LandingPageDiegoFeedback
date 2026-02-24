document.querySelectorAll('.menu-panel a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu-dropdown').removeAttribute('open');
  });
});