(function () {
  var isMobile = window.isMobile.any;

  if (isMobile) {
    console.log('This - mobile');

    var langSwitcher = document.querySelector('.lang-switcher');
    if (langSwitcher) {
      var langsArr = langSwitcher.querySelectorAll('.lang-switcher__item');
      var langLinks = langSwitcher.querySelectorAll('.lang-switcher__link');
      var currentLang = langSwitcher.querySelector('.active');
    }

    var makeActive = function () {
      langLinks.forEach(function (link) {
        if (link.classList.contains('active')) {
          link.removeAttribute('href');
          link.parentElement.classList.add('active');
        }
      });
    };

    makeActive();

    var langSwitchOpener = function (e) {
      // e.preventDefault();
      for (var i = 0; i < langsArr.length; i++) {
        langsArr[i].classList.toggle('open');
      }
      // console.log('Click');
    };

    if (currentLang) {
      langSwitcher.addEventListener('click', langSwitchOpener);
    }
  }
})();

/*(function(){
  var langWrapper = document.querySelector('.page-header__lang');
  var langLinks = langWrapper.querySelectorAll('.lang-switcher__link');
  var isMobile = window.isMobile.any;

  var makeActive = function () {
    langLinks.forEach(function (link) {
        if (link.classList.contains('active')) {
          link.removeAttribute('href');
          link.parentElement.classList.add('active');
        }
    });
  };

  makeActive();

  if(langWrapper && isMobile) {

    langWrapper.addEventListener('click', function(event) {
      // event.currentTarget.stopPropagation();
      // event.stopPropagation();
      // event.preventDefault();
      langWrapper.classList.toggle('main-nav__lang-wrapper--open');
    }, true)
  } else if (langWrapper && !isMobile) {
      langWrapper.addEventListener('mouseover', function() {
        if (!langWrapper.classList.contains('main-nav__lang-wrapper--open')) {
          langWrapper.classList.add('main-nav__lang-wrapper--open');
        } else return;
      })

      langWrapper.addEventListener('mouseout', function() {
        if (langWrapper.classList.contains('main-nav__lang-wrapper--open')) {
          langWrapper.classList.remove('main-nav__lang-wrapper--open');
        } else return;
      })
  }

}());*/
