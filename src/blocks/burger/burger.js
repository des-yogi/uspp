$(document).ready(function(){
  // $('.page-header__navigation').hide();
  $('.menu-toggle').on('click', function() {
    $('.menu-toggle').toggleClass('active').attr('area-pressed', 'true');
    $('.page-header__navigation').animate({
      height: 'toggle'
      }, {
      duration: 300,
      specialEasing: {
        //opacity: 'linear',
        height: 'swing'
      }
    });
  });
  $('.menu-toggle').on('keypress', function() {
    $('.menu-toggle').toggleClass('active').attr('area-pressed', 'true');
    $('.page-header__navigation').animate({
      height: 'toggle'
      }, {
      duration: 300,
      specialEasing: {
        //opacity: 'linear',
        height: 'swing'
      }
    });
  });
});
