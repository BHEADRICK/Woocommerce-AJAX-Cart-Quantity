(function($) {
 $(document).ready(function() {

      jQuery.ajax({
     url: cart_page.wpajaxurl,
     data: ({action : 'get_ajax_cart_qty'}),
     success: function(data) {
         var qty = data.slice(0,-1);
      console.log(qty);
      console.log(cart_page);
       
      $('a[href$="' + cart_page.cart_url + '"]').append(' (' + qty.toString() + ') ').css('white-space','nowrap') ;
     }
     });
     
     });
     
     })( jQuery );