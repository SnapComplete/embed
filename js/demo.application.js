(function() {
  $(function () {
    $('.proceed').on('click', function(e) {
      $('#checkout').show();
      SC.init({
        showImmediately: true,
        autoFill: true
      }, function(data) {
        console.log(data);
      });
    });

    $('.product').on('click', '.product-add', function(e) {
      var $cart = $('.cart');
      if ($cart.hasClass('close')) {
        $cart.animate({
          bottom: 0
        }, 500);
      }
      $('<li class="cart-item">').text($('.product-info h4', e.delegateTarget).text()).appendTo($('.cart-items'));
    });

    $('button.submit').on('click', function(e) {
      $('#checkout').hide();
    });
  });
})();
