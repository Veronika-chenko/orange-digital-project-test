(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open-btn]'),
    closeMenuBtn: document.querySelector('[data-menu-close-btn]'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    menuItems: document.querySelectorAll('[data-mob-menu-item'),
    anchors: document.querySelectorAll('a[href*="#"]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.menuItems.forEach((item) => {
      item.classList.toggle('show');
    });
  }

  for (let anchor of refs.anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      e.currentTarget.blur();
      const blockId = anchor.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        closeMenu: closeMenu(e),
      });
    });
  }

  function closeMenu(e) {
    if (e.target.closest('.mob-menu-item')) toggleMenu();
  }
})();
