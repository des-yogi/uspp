(function($) {

  $.fn.menumaker = function(options) {

      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        //cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        /*$(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) {
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });*/

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
          cssmenu.find(".parent>a").after('<span class="submenu-button"></span>');
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

    /*menuLine.css("width", lineWidth);
    menuLine.css("left", linePosition);

    $("#hmenu > ul > li").hover(function() {
      activeElement = $(this);
      lineWidth = activeElement.width();
      linePosition = activeElement.position().left;
      menuLine.css("width", lineWidth);
      menuLine.css("left", linePosition);
    },
    function() {
      menuLine.css("left", defaultPosition);
      menuLine.css("width", defaultWidth);
    });*/
  });
})(jQuery);
