
$j(document).ready(function() {
	"use strict";
        
        $j('.price_slider_wrapper').parents('.widget').addClass('widget_price_filter');
        initSelect2();
});

function initSelect2() {
    $j('.woocommerce-ordering .orderby, #calc_shipping_country, #dropdown_product_cat').select2({
        minimumResultsForSearch: -1
    });
    $j('.woocommerce-account .country_select').select2();
}