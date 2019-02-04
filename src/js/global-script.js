// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });


(function(){
  const Page = document.querySelector('.page');
  if (Page.classList.contains('no-js')) {
    Page.classList.remove('no-js');
    Page.classList.add('js');
  }
  return;
}());

(function(){
  const searchForm = document.getElementById('search-form');
  const searchSubmit = document.querySelector('.search__submit');
  const searchField = document.querySelector('input[type=search]');
  const searchHandler = function (e) {
    e.preventDefault();
    if (searchField.classList.contains('open') && searchField.value !== "") {
      searchForm.submit();
    } else if (!searchField.classList.contains('open')) {
        searchField.classList.add('open');
    } else {
        searchField.classList.remove('open');
    }
  };

  if (searchSubmit) {
    searchSubmit.addEventListener('click', searchHandler);
  }
}());

//iframe lazyLoad (b-lazy)
(function(){
  const bLazy = new Blazy({
    container: '.media__video-wrapper'
  });
}());

(function(){
  const partners = new Swiper('.swiper-container', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpointsInverse: true,
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    }
  });
}());
