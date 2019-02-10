/*(function($) {

  $.fn.menumaker = function(options) {

      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {

        // Анимация открятия меню и субменю, скорость анимации задается кастомно
        $.fn.animateThisElem = function(durationValue) {
          if (durationValue === '') durationValue === 200;
          return this.animate({
            height: 'toggle'
            }, {
            duration: durationValue,
            specialEasing: {
              //opacity: 'linear',
              height: 'swing'
            }
          });
        };

        // Переключатель состояния меню и кнопки бургера с поддержкой доступности
        var menuStateToggler = function (e) {
          //$(this).toggleClass('menu-opened');
          var mainmenu = $('.main-nav__menu');
          if (mainmenu.hasClass('open')) {
            //mainmenu.hide().removeClass('open');
            $('.menu-toggle').removeClass('active').attr('area-pressed', 'false');
            mainmenu.animateThisElem(200).removeClass('open');
          }
          else {
            //mainmenu.show().addClass('open');
            $('.menu-toggle').addClass('active').attr('area-pressed', 'true');
            mainmenu.animateThisElem(300).addClass('open');

            if (settings.format === "dropdown") {
              mainmenu.find('ul').animateThisElem(300);
            }
          }
        };

        // обрабатываем не только клик мышью, но нажатие с клавиатуры
        $('.menu-toggle').on('click', menuStateToggler);
        $('.menu-toggle').on('keypress', menuStateToggler);

        cssmenu.find('li ul').parent().addClass('parent');

        var multiTg = function() {
          cssmenu.find(".parent>a").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.parent>a').on('click', function() {
            event.preventDefault();
            $(this).siblings('span').toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').animateThisElem(200);
            }
            else {
              $(this).siblings('ul').addClass('open').animateThisElem(300);
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        var resizeFix = function() {
          if ($( window ).width() > 1279) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 1279) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){

  $(document).ready(function() {

    $("#hmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

    //инициалтзация переключателя меня для доступности в полож. aria-pressed="false"
    $('.menu-toggle').attr('area-pressed', 'false');

    //$("#hmenu").prepend("<div id='menu-line'></div>");
    var foundActive = false, activeElement, linePosition = 0, menuLine = $("#hmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

    $("#hmenu > ul > li").each(function() {
      if ($(this).hasClass('active')) {
        activeElement = $(this);
        foundActive = true;
      }
    });

    if (foundActive === false) {
      activeElement = $("#hmenu > ul > li").first();
    }

    defaultWidth = lineWidth = activeElement.width();

    defaultPosition = linePosition = activeElement.position().left;


  });
})(jQuery);
*/



(function () {
  var myOffside = offside( '#my-menu', {

      // Global offside options: affect all offside instances
      slidingElementsSelector: '#content-container', // String: Sliding elements selectors ('#foo, #bar')
      disableCss3dTransforms: false,                    // Disable CSS 3d Transforms support (for testing purposes)
      debug: true,                                      // Boolean: If true, print errors in console

      // Offside instance options: affect only this offside instance
      buttonsSelector: '#my-button, .menu-toggle',   // String: Offside toggle buttons selectors ('#foo, #bar')
      slidingSide: 'left',                             // String: Offside element pushed on left or right
      init: function(){},                               // Function: After init callback
      beforeOpen: function(){},                         // Function: Before open callback
      afterOpen: function(){},                          // Function: After open callback
      beforeClose: function(){},                        // Function: Before close callback
      afterClose: function(){
        $('.offside-sliding-element').css({'transform':'translate3d(0, 0, 0)', 'transition':'none'});
      },                         // Function: After close callback

  });

  var overlay = document.querySelector('.site-overlay');
  overlay.addEventListener( 'click', window.offside.factory.closeOpenOffside );
})();

$(function () {

    $('#mobile-nav').metisMenu();

});
