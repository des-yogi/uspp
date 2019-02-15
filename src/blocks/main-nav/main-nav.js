(function () {
  var myOffside = offside( '#off-canvas-menu', {

      // Global offside options: affect all offside instances
      slidingElementsSelector: '#content-container', // String: Sliding elements selectors ('#foo, #bar')
      disableCss3dTransforms: false,                    // Disable CSS 3d Transforms support (for testing purposes)
      debug: true,                                      // Boolean: If true, print errors in console

      // Offside instance options: affect only this offside instance
      buttonsSelector: '#off-canvas-close, .menu-toggle',   // String: Offside toggle buttons selectors ('#foo, #bar')
      slidingSide: 'left',                             // String: Offside element pushed on left or right
      init: function(){},                               // Function: After init callback
      beforeOpen: function(){},                         // Function: Before open callback
      afterOpen: function(){},                          // Function: After open callback
      beforeClose: function(){},                        // Function: Before close callback
      afterClose: function(){
        $('.offside-sliding-element').css({'transform':'translate3d(0, 0, 0)', 'transition':'none'});
      },  // Function: After close callback

  });

  var overlay = document.querySelector('.site-overlay');
  overlay.addEventListener( 'click', window.offside.factory.closeOpenOffside );
})();

$(function () {
  $('#mobile-nav').metisMenu();
  $('#desktop-nav').metisMenu();
});
