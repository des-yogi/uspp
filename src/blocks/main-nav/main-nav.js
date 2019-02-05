(function(){
  const menu = document.querySelector('.main-nav');
  //const menuItemLink = menu.querySelectorAll('.main-nav__link');
  const menuOpener = function (e) {

    if (e.target.nextElementSibling.className === 'main-nav__submenu') {
      e.preventDefault();
      e.target.nextElementSibling.style.display = 'block';
    }
  };

  if (menu) {
    menu.addEventListener('click', menuOpener);
  }
}());
