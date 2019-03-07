/*(function () {
  const isMobile = window.isMobile.any;
  let screenWidth = document.documentElement.clientWidth;

  console.log(screenWidth);

  if (screenWidth < 1280) {
    //console.log('This - mobile width');

    var langSwitcher = document.querySelector('.lang-switcher');
    if (langSwitcher) {
      var langsArr = langSwitcher.querySelectorAll('.lang-switcher__item');
      var currentLang = langSwitcher.querySelector('.active');
    }

    var langSwitchOpener = function (e) {
      //e.preventDefault();
      var target = e.target;

      for (var i = 0; i < langsArr.length; i++) {
        if ( !langsArr[i].classList.contains('open') && !langsArr[i].classList.contains('active') ) {
          langsArr[i].classList.add('open');
          this.classList.add('rotate-bg');
        } else if (langsArr[i].classList.contains('open') && !langsArr[i].classList.contains('active')) {
            langsArr[i].classList.remove('open');
            this.classList.remove('rotate-bg');
        }
      }
    };

    if (currentLang) {
      langSwitcher.addEventListener('click', langSwitchOpener);
    }
  }
})();*/
