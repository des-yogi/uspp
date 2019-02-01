/*(function () {
  if (isMobile.any) {
    console.log('This - mobile');

    var langSwitcher = document.querySelector('.lang-switcher');
    if (langSwitcher) {
      var langsArr = langSwitcher.querySelectorAll('.lang-switcher__link');
      var currentLang = langSwitcher.querySelector('.active');
    }

    var langSwitchOpener = function (e) {
      e.preventDefault();
      for (var i = 0; i < langsArr.length; i++) {
        //$(langsArr[i]).show(300);
        langsArr[i].classList.toggle('active');
        //langsArr[i].parentElement.style = 'order:-1';
      }
      console.log('Click');
    };

    if (currentLang) {
      currentLang.addEventListener('click', langSwitchOpener);
    }
  }
})();*/
