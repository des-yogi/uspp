(function () {
  const isMobile = window.isMobile.any;

  if (isMobile) {
    console.log('This - mobile');

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

      for (var j = 0; j < langsArr.length; j++) {
        if (langsArr[j].classList.contains('active')) {
          langsArr[j].classList.remove('active');
          langsArr[j].children[0].classList.remove('active');
          langsArr[j].children[0].removeAttribute('href');
        }
        target.parentElement.classList.add('active');
        target.classList.add('active');
      }
    };

    if (currentLang) {
      langSwitcher.addEventListener('click', langSwitchOpener);
    }
  }
})();
