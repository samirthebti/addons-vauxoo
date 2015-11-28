(function() {
    'use strict';

    openerp.website.if_dom_contains('.js_attributes', function(){
        $.ajax({
          url: "/get_prods",
          method: "POST",
          data: { category: $("#products_grid_before li.active").data("categid")},
          beforeSend: function( xhr ) {
            $('.att-value').after(' <i class="fa fa-spinner fa-spin"></i>');
          }
        }).done(function( data ) {
            if ( console && console.log ) {
              $.each(JSON.parse(data), function(i, obj) {
              $('.att-value#'+obj.id).next().replaceWith('<span class="badge">'+obj.qty+'</span>');
              });
            }
          });
    });

}());
