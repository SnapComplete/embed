(function() {
  $(function () {
    $('.products').on('click', '.product-add', function() {
      if(!$('.checkout').is(':visible')) {
        $('.checkout').slideDown('slow');
      }
    });

    $('.product-add').first().click();
    window.addEventListener('push', function() {
      SC.init({
        showImmediately: true,
        autoFill: true
      }, function(data) {
      });
    });

    new FingerBlast('body');

  });
})();
