// $j(window).load(function(){
	// setTimeout(function(){
		// $j("#panel.default").animate({marginLeft: "0px"});
		// $j("a.open").addClass('opened');
		// $j("#panel").addClass('opened-panel');
	// },1000);
// });

var tooltip1 = '<div class="tooltip tooltip1"><a href="#" class="tooltip_marker"></a> \
									<div class="popup_tooltip popup_tooltip1"> \
										<div class="popup_tooltip_inner"><i class="fa fa-times"></i> \
											<div class="tooltip_row clearfix"> \
													<h5 class="tooltip_title">Header Options</h5> \
													<p>eden theme comes with an amazing new Qode functionality - choose main menu colors from page to page. Combine it with dark/light/transparent header backgrounds to create beautiful contrasts between pages. </p> \
													<h5>Try a different style</h5> \
													<img class="tooltip_image_1" src="http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_1.jpg" alt="&nbsp;" /> \
													<a class="qbutton tiny tooltip_link_1" href="#">Change</a> \
											</div> \
										</div> \
									</div> \
								</div>\
								';
var tooltip2 = '<div class="tooltip tooltip2"><a href="#" class="tooltip_marker"></a> \
									<div class="popup_tooltip popup_tooltip2"> \
										<div class="popup_tooltip_inner"><i class="fa fa-times"></i> \
											<div class="tooltip_row clearfix"> \
													<h5 class="tooltip_title">Footer Options</h5> \
													<p>Choose different footer types, regular or unfold. </p> \
													<h5>Try a different style</h5> \
													<img class="tooltip_image_2" src="http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_2.jpg" alt="&nbsp;" /> \
													<a class="qbutton tiny tooltip_link_2" href="#">Change</a> \
											</div> \
										</div> \
									</div> \
								</div>\
								';
								
var tooltip3 = '<div class="tooltip tooltip3"><a href="#" class="tooltip_marker"></a> \
									<div class="popup_tooltip popup_tooltip3"> \
										<div class="popup_tooltip_inner"><i class="fa fa-times"></i> \
											<div class="tooltip_row clearfix"> \
													<h5 class="tooltip_title">Sticky Header Options</h5> \
													<p>All menus are completely customizable and can be as simple or as complex as you want. Try our two favorite combinations. </p> \
													<h5>Try a different style</h5> \
													<img class="tooltip_image_3" src="http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_3.jpg" alt="&nbsp;" /> \
													<a class="qbutton tiny tooltip_link_3" href="#">Change</a> \
											</div> \
										</div> \
									</div> \
								</div>\
								';
$j(window).load(function(){
	//$j('header .header_bottom .container_inner').append(tooltip1);
	//$j('footer .container_inner').append(tooltip2);
});
									
$j(document).ready(function() {
	
	$j(document).on( "click", ".tooltip .tooltip_marker", function(){
		$j(".popup_tooltip").hide(300);
		var $this = $j(this);
		
		if ($this.next(".popup_tooltip").is(":visible")){           
			$this.next(".popup_tooltip").find(".popup_tooltip_inner").animate({opacity:0},100);
			$this.next(".popup_tooltip").hide(300);
    }
    else{      
			$this.next(".popup_tooltip").show(300, function(){
				$this.next(".popup_tooltip").find(".popup_tooltip_inner").animate({opacity:1},600);
			});
    }
    return false;
	});
	
	$j(document).on( "click", ".tooltip .popup_tooltip_inner i", function(){
		$j(".popup_tooltip").hide(300);
		
		$j(this).closest(".popup_tooltip").find(".popup_tooltip_inner").animate({opacity:0},100);
		$j(this).closest(".popup_tooltip").hide(300);  
		
    return false;
	});
	
	$j(document).on( "click", ".tooltip_link_1", function(e){
		e.preventDefault();
		if(!$j(this).hasClass('clicked')){
			$j(this).addClass('clicked');
			$j('html').addClass('dark_header');
			$j('.tooltip_image_1').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_1_reverse.jpg');
		}else{
			$j(this).removeClass('clicked');
			$j('html').removeClass('dark_header');
			$j('.tooltip_image_1').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_1.jpg');
		}
	});
	
	$j(document).on( "click", ".tooltip_link_2", function(e){
		e.preventDefault();
		if(!$j(this).hasClass('clicked')){
			$j(this).addClass('clicked');
			$j('footer').removeClass('uncover');
			$j('.content').addClass('normal_footer_content');
			$j('.tooltip_image_2').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_2_reverse.jpg');
			
			
		}else{
			$j(this).removeClass('clicked');
			$j('footer').addClass('uncover');
			$j('.content').removeClass('normal_footer_content');
			$j('.tooltip_image_2').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_2.jpg');
			
		}
	});
	
	$j(document).on( "click", ".tooltip_link_3", function(e){
		e.preventDefault();
		if(!$j(this).hasClass('clicked')){
			$j(this).addClass('clicked');
			$j('html').addClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_3_reverse.jpg');
			
			
		}else{
			$j(this).removeClass('clicked');
			$j('html').removeClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_3.jpg');
			
		}
	});
	
	$j('ul#tootlbar_header_color li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "transparent"){
			$j('.tooltip_link_1').addClass('clicked');
			$j('html').addClass('dark_header');
			$j('.tooltip_image_1').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_1_reverse.jpg');
		}else{
			$j('.tooltip_link_1').removeClass('clicked');
			$j('html').removeClass('dark_header');
			$j('.tooltip_image_1').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_1.jpg');
		}
	});
	
	$j('ul#tootlbar_header_sticky_color li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "white"){
			$j('.tooltip_link_3').addClass('clicked');
			$j('html').addClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_3_reverse.jpg');
		}else{
			$j('.tooltip_link_3').removeClass('clicked');
			$j('html').removeClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_3.jpg');
		}
	});
	
	$j('ul#tootlbar_header_footer_color li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "dark"){
			$j('.tooltip_link_2').addClass('clicked');
			$j('footer').addClass('white_footer');
			$j('.tooltip_image_2').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_2_reverse.jpg');
			$j('footer .column1 img').attr('src','http://demo.qodeinteractive.com/eden/wp-content/themes/eden/img/logo_black.png');
		}else{
			$j('.tooltip_link_2').removeClass('clicked');
			$j('footer').removeClass('white_footer');
			$j('.tooltip_image_2').attr('src','http://demo.qodeinteractive.com/eden/demo_images/tooltip_image_2.jpg');
			$j('footer .column1 img').attr('src','http://demo.qodeinteractive.com/eden/wp-content/themes/eden/img/logo.png');
		}
	});
	
	
	$j("#panel.default a.open").click(function(e){
		e.preventDefault();
		var margin_left = $j("#panel.default").css("margin-left");
		if (margin_left == "-185px"){
			$j("#panel.default").animate({marginLeft: "0px"});
			$j("#panel.default").addClass('opened-panel');
			$j(this).addClass('opened');
		}
		else{
			$j("#panel.default").animate({marginLeft: "-185px"});
			$j(this).removeClass('opened');
			$j("#panel.default").removeClass('opened-panel');
		}
		return false;
	});
	
	$j("#panel.hide_sections a.open").click(function(e){
		e.preventDefault();
		var margin_right = $j("#panel.hide_sections").css("margin-right");
		if (margin_right == "-185px"){
			$j("#panel.hide_sections").animate({marginRight: "0px"});
			$j("#panel.hide_sections").addClass('opened-panel');
			$j(this).addClass('opened');
		}
		else{
			$j("#panel.hide_sections").animate({marginRight: "-185px"});
			$j(this).removeClass('opened');
			$j("#panel.hide_sections").removeClass('opened-panel');
		}
		return false;
	});
	
	$j(".accordion_toolbar").accordion({
		animate: "swing",
		collapsible: true,
		active: 7,
		icons: "",
		heightStyle: "content"
	});
	
	$j('ul#tootlbar_header_top_menu li').click(function(){
		if($j(this).attr("data-value") != ""){
			
    	$j.post(qode_root+'updatesession.php', {eden_header_top : $j(this).attr("data-value")}, function(data){
				location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_page_transitions li').click(function(){
		if($j(this).attr("data-value") != ""){
			
    	$j.post(qode_root+'updatesession.php', {eden_page_transitions : $j(this).attr("data-value")}, function(data){
				location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_smooth_scroll li').click(function(){
		if($j(this).attr("data-value") != ""){
    	$j.post(qode_root+'updatesession.php', {eden_smooth : $j(this).attr("data-value")}, function(data){
				location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_header_type li').click(function(){
		if($j(this).attr("data-value") != ""){
    	$j.post(qode_root+'updatesession.php', {eden_header_type : $j(this).attr("data-value")}, function(data){
					location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_pattern li').click(function(){

		$j('body.boxed .wrapper').removeClass('toolbar_clicked');
		jQuery('#tootlbar_pattern_css').remove();
		
		if($j(this).attr("data-value") != "no"){
			//$j('#tootlbar_boxed').getSetSSValue('boxed');
			//$j('#tootlbar_background').getSetSSValue('no');
			$j('body').addClass('boxed');
			newSkin ="body.boxed .wrapper { \
									background-image: url('http://demo.qodeinteractive.com/river/demo_images/"+$j(this).attr("data-value")+".png'); \
									background-position: 0px 0px; \
									background-repeat: repeat; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern_css" type="text/css">'+newSkin+'</style>'); 
			
		}else{
			newSkin ="body { \
									background-image: none; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern_css" type="text/css">'+newSkin+'</style>'); 
		}
	});
	
	$j('ul#tootlbar_background li').click(function(){
	
	$j('body.boxed .wrapper').removeClass('toolbar_clicked');
	jQuery('#tootlbar_background_css').remove();
		if($j(this).attr("data-value") != "no"){
			//$j('#tootlbar_boxed').getSetSSValue('boxed');
			//$j('#tootlbar_pattern').getSetSSValue('no');
			$j('body').addClass('boxed');
			newSkin ="body.boxed .wrapper { \
									background-image: url('http://demo.qodeinteractive.com/river/demo_images/"+$j(this).attr("data-value")+".jpg'); \
									background-position: 0px 0px; \
									background-repeat: repeat; \
									background-attachment: fixed; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_background_css" type="text/css">'+newSkin+'</style>'); 
			
		}else{
			newSkin ="body { \
									background-image: none; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_background_css" type="text/css">'+newSkin+'</style>'); 
		}
	});
	
	$j('ul#tootlbar_boxed li').click(function(){
	
		$j('body').removeClass('boxed');
		$j('body').addClass($j(this).attr("data-value"));

		$j('body.boxed .wrapper').addClass('toolbar_clicked');
		
		if($j(this).attr("data-value") != "boxed"){
			$j('#tootlbar_pattern').getSetSSValue('no');
			$j('#tootlbar_background').getSetSSValue('no');
		}
	});	
	
	$j('ul#tootlbar_tooltips li').click(function(){
		if($j(this).attr("data-value") != "yes"){
			$j('.tooltip').css('visibility','hidden');
		}else{
			$j('.tooltip').css('visibility','visible');
		}
	});
	
	$j('div#tootlbar_hide_sections li input').change(function(){
		var id = $j(this).val();
		if(this.checked){
			$j("div.wpb_row[data-q_id='" + id + "'],section.parallax_section_holder[data-q_id='" + id + "']").fadeIn();
    }else{
			$j("div.wpb_row[data-q_id='" + id + "'],section.parallax_section_holder[data-q_id='" + id + "']").fadeOut();
		}
	});
	
	$j('#tootlbar_colors .color').each(function(){
		$j(this).on('click',function(){
			$j('#tootlbar_colors .color').removeClass('active');
			$j(this).addClass('active');
			var color = $j(this).data('color');
			if($j(this).hasClass('color1')){
				var logo_image = "logo_blue";
				var social_share = "social_share_blue";
			}else if($j(this).hasClass('color2')){
				var logo_image = "logo_red";
				var social_share = "social_share_red";
			}else if($j(this).hasClass('color3')){
				var logo_image = "logo_green";
				var social_share = "social_share_green";
			}else if($j(this).hasClass('color4')){
				var logo_image = "logo_yellow";
				var social_share = "social_share_yellow";
			}else if($j(this).hasClass('color5')){
				var logo_image = "logo_purple";
				var social_share = "social_share_purple";
			}else if($j(this).hasClass('color6')){;
				var logo_image = "logo_pink";
				var social_share = "social_share_pink";
			}else{
				var logo_image = "logo_blue";
				var social_share = "social_share_blue";
			}
			
			if ($j("#toolbar_colors_css").length > 0){
				$j("#toolbar_colors_css").remove();
			}
			$j('.q_logo img.normal').attr('src', 'http://demo.qodeinteractive.com/eden/demo_images/'+logo_image+'.png');
			newSkin ="nav.main_menu > ul > li.active > a span.line,\
					.q_progress_bar .progress_content,\
					.q_progress_bars_vertical .progress_content_outer .progress_content,\
					.qbutton,\
					.load_more a,\
					#submit_comment,\
					.drop_down .wide .second ul li .qbutton,\
					.drop_down .wide .second ul li ul li .qbutton,\
					.highlight,\
					.q_dropcap.circle,\
					.q_dropcap.square,\
					.price_table_inner.active_price ul li.prices,\
					.price_table_inner:hover ul li.prices,\
					.service_table_inner li.service_table_title_holder,\
					.more_facts_button,\
					.q_list.number.circle_number ul>li:before,\
					.q_social_icon_holder .fa-stack,\
					.blog_holder article.format-link .post_text_holder:hover,\
					.blog_holder article.format-quote .post_text_holder:hover,\
					.single_tags a,\
					.widget .tagcloud a,\
					#wp-calendar td#today,\
					#back_to_top:hover span,\
					.vc_text_separator.full div,\
					.mejs-controls .mejs-time-rail .mejs-time-current,\
					.mejs-controls .mejs-time-rail .mejs-time-handle,\
					.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,\
					.q_pie_graf_legend ul li .color_holder,\
					.q_line_graf_legend ul li .color_holder,\
					.circle_item .circle:hover,\
					.qode_carousels .flex-control-paging li a.flex-active,\
					.woocommerce .button,\
					.woocommerce-page .button,\
					.woocommerce-page input[type='submit'],\
					.woocommerce input[type='submit'],\
					.woocommerce ul.products li.product .added_to_cart,\
					.woocommerce-account table.my_account_orders tbody tr td.order-actions a,\
					.woocommerce .product .onsale,\
					.woocommerce .product .single-onsale,\
					.woocommerce .quantity .minus:hover,\
					.woocommerce #content .quantity .minus:hover,\
					.woocommerce-page .quantity .minus:hover,\
					.woocommerce-page #content .quantity .minus:hover,\
					.woocommerce .quantity .plus:hover,\
					.woocommerce #content .quantity .plus:hover,\
					.woocommerce-page .quantity .plus:hover,\
					.woocommerce-page #content .quantity .plus:hover,\
					.woocommerce .widget_price_filter .ui-slider-horizontal .ui-slider-range,\
					.woocommerce-page .widget_price_filter .ui-slider-horizontal .ui-slider-range,\
					.shopping_cart_header .header_cart span{ \
						background-color: "+color+"; \
					} \
					.qbutton.transparent_button:hover,\
					.box_holder_icon_inner .fa-stack:hover,\
					.q_font_awsome_icon_square:hover,\
					.q_font_awsome_icon_stack:hover i.fa-stack-base,\
					.q_icon_with_title .icon_holder .fa-stack:hover,\
					.icon_elegant_holder .fa-stack:hover{ \
						background-color: "+color+" !important; \
					} \
			        h1 a:hover, \
					h2 a:hover,\
					h3 a:hover,\
					h4 a:hover,\
					h5 a:hover,\
					h6 a:hover,\
					a,\
					p a,\
					a:hover,\
					p a:hover,\
					.mobile_menu_button span:hover,\
					nav.main_menu>ul>li.active > a > span,\
					nav.main_menu>ul>li.active > a > i,\
					nav.main_menu > ul > li:hover > a > span,\
					nav.main_menu > ul > li:hover > a > i,\
					nav.mobile_menu ul li a:hover,\
					nav.mobile_menu ul li.active > a,\
					.side_menu_button > a:hover,\
					.dark .side_menu_button > a:hover,\
					.light .side_menu_button > a:hover,\
					.breadcrumb .current,\
					.breadcrumb a:hover,\
					.box_image_holder .box_icon .fa-stack i.fa-stack-base,\
					.q_icon_list i,\
					.box_holder_icon .fa-stack i,\
					.qbutton.transparent_button,\
					.qbutton.stript_button,\
					.qbutton.stript_button:hover,\
					.portfolio_social_holder a:hover,\
					.portfolio_like a.liked i,\
					.portfolio_like a:hover i,\
					.portfolio_single .portfolio_like a.liked i,\
					.portfolio_single .portfolio_like a:hover i,\
					.title .portfolio_like a.liked i,\
					.title .portfolio_like a:hover i,\
					.q_tabs .tabs-nav li.active a,\
					.q_tabs .tabs-nav li a:hover,\
					.q_accordion_holder.accordion.with_icon .ui-accordion-header i,\
					blockquote i.pull-left,\
					.q_dropcap,\
					.q_message.with_icon > i,\
					.q_font_awsome_icon i,\
					.q_icon_with_title .icon_holder .fa-stack i,\
					.box_holder_icon_inner .fa-stack i,\
					.q_font_awsome_icon_square i,\
					.q_font_awsome_icon_stack i,\
					.q_icon_with_title .icon_with_title_link,\
					.q_icon_list_with_text_icon_holder .q_icon_list_with_text_icon i,\
					.q_icon_list_with_text_icon_holder .q_icon_list_with_text_icon .q_icon_list_with_text_in_circle,\
					.icon_elegant_holder .fa-stack i,\
					.q_progress_bars_icons_inner.square .bar.active i,\
					.q_progress_bars_icons_inner.circle .bar.active i,\
					.q_progress_bars_icons_inner.normal .bar.active i,\
					.q_progress_bars_icons_inner .bar.active i.fa-circle,\
					.q_list.number ul>li:before,\
					.latest_post_inner .post_infos a:hover,\
					.blog_holder article .post_text .post_text_date .post_date_day,\
					.blog_holder.blog_large_image article .post_category:hover,\
					.blog_holder.blog_large_image article .post_category:hover a,\
					.blog_holder article .post_description a:hover,\
					.blog_holder.masonry article .post_info a:hover,\
					.post_info_right a:hover,\
					.blog_holder article .post_comments:hover,\
					.latest_post_inner .post_comments:hover,\
					.blog_like a:hover,\
					.blog_like a.liked,\
					.social_share_holder:hover .social_share_title,\
					.social_share_dropdown ul li:hover .share_text,\
					.social_share_dropdown ul li :hover i,\
					.blog_holder article.format-quote .post_text_holder i.qoute_mark,\
					.blog_holder article.format-link .post_text_holder i.link_mark,\
					.blog_holder.masonry article.format-quote .post_text .post_title h4:hover a,\
					.blog_holder.masonry article.format-link .post_text .post_title h4:hover a,\
					.blog_holder.blog_single article .post_description_inner span:hover,\
					.blog_holder.blog_single article .post_description_inner a:hover,\
					.comment_holder .comment .text .reply_holder:hover a,\
					.comment_holder .comment .text .reply_holder:hover i,\
					.comment_holder .comment .text .comment-respond small > a:hover,\
					#respond textarea:focus,\
					#respond input[type='text']:focus,\
					.contact_form input[type='text']:focus,\
					.contact_form  textarea:focus,\
					.widget.widget_search form input[type='text']:focus,\
					.header_top #searchform input[type='text']:focus,\
					.q_team .q_team_title_holder span,\
					.filter_holder ul li:hover,\
					.gallery_holder ul li .gallery_hover i:hover,\
					.woocommerce .select2-results li.select2-highlighted,\
					.woocommerce-page .select2-results li.select2-highlighted,\
					.woocommerce-checkout .chosen-container .chosen-results li.active-result.highlighted,\
					.woocommerce-account .chosen-container .chosen-results li.active-result.highlighted,\
					.woocommerce ul.products li.product h4:hover,\
					.woocommerce ul.products li.product .price,\
					.woocommerce div.product .summary p.price span.amount,\
					.woocommerce div.cart-collaterals div.cart_totals table tr.order-total strong span.amount,\
					.woocommerce-page div.cart-collaterals div.cart_totals table tr.order-total strong span.amount,\
					.woocommerce div.cart-collaterals div.cart_totals table tr.order-total strong,\
					.woocommerce .checkout-opener-text a,\
					.woocommerce form.checkout table.shop_table tfoot tr.order-total th,\
					.woocommerce form.checkout table.shop_table tfoot tr.order-total td span.amount,\
					.woocommerce aside ul.product_list_widget li > a:hover,\
					.woocommerce aside ul.product-categories li > a:hover,\
					.woocommerce aside ul.product_list_widget li span.amount,\
					.woocommerce .widget_shopping_cart p.total .amount,\
					.woocommerce aside .widget ul.product-categories a:hover,\
					.woocommerce-page aside .widget ul.product-categories a:hover,\
					.woocommerce .widget #searchform input[type='text']:focus,\
					.shopping_cart_header .header_cart:hover i,\
					.shopping_cart_dropdown ul li a:hover,\
					.shopping_cart_dropdown span.total span,\
					.shopping_cart_dropdown .cart_list span.quantity,\
					.woocommerce .summary p.stock.out-of-stock{ \
			            color: "+color+"; \
			        } \
			       .projects_holder article .portfolio_description .portfolio_title:hover a,\
					.projects_holder article .feature_holder_info .portfolio_title:hover a,\
					.portfolio_slides .feature_holder_info .portfolio_title:hover a,\
					.projects_holder article a.lightbox:hover i,\
					.projects_holder article a.preview:hover i,\
					.projects_holder article .portfolio_like:hover i,\
					.projects_holder article .portfolio_like:hover .qode-like-count,\
					.portfolio_slides a.lightbox:hover i,\
					.portfolio_slides a.preview:hover i,\
					.portfolio_slides .portfolio_like:hover i,\
					.portfolio_slides .portfolio_like:hover .qode-like-count,\
					.q_accordion_holder.accordion .ui-accordion-header:hover span.tab-title,\
					.blog_holder.masonry article.format-quote .post_text_holder i.qoute_mark,\
					.blog_holder.masonry article.format-link .post_text_holder i.link_mark,\
					aside .widget a:hover,\
					.q_steps_holder .circle_small:hover span,\
					.q_steps_holder .circle_small:hover .step_title,\
					aside .widget #lang_sel_list ul li a.lang_sel_sel,\
					aside .widget #lang_sel_list ul li:hover > a,\
					.header_top #lang_sel_list ul li a.lang_sel_sel,\
					.header_top #lang_sel_list ul li:hover > a,\
					aside .widget #lang_sel > ul > li:hover > a,\
					aside .widget #lang_sel_click > ul > li:hover > a,\
					footer #lang_sel > ul > li:hover > a,\
					footer #lang_sel_click > ul > li:hover > a,\
					section.side_menu #lang_sel > ul > li:hover > a,\
					section.side_menu #lang_sel_click > ul > li:hover > a,\
					.header_top #lang_sel > ul > li:hover > a, \
					.header_top #lang_sel_click > ul > li:hover > a,\
					.q_circles_holder .q_circle_inner2:hover i{ \
			            color: "+color+" !important; \
			        } \
			        .ajax_loader_html,\
					.box_image_with_border:hover,\
					.qbutton.transparent_button,\
					.service_table_inner li.service_table_title_holder,\
					.box_holder_icon_inner .fa-stack,\
					.q_font_awsome_icon_square,\
					.q_font_awsome_icon_stack i.fa-stack-base,\
					.q_icon_with_title .icon_holder .fa-stack,\
					.latest_post_holder.boxes > ul > li:hover .latest_post,\
					.blog_holder.masonry article:hover,\
					#back_to_top:hover span,\
					.q_steps_holder .circle_small_wrapper,\
					.q_team.boxes:hover .q_team_inner,\
					woocommerce .quantity .minus:hover,\
					.woocommerce #content .quantity .minus:hover,\
					.woocommerce-page .quantity .minus:hover,\
					.woocommerce-page #content .quantity .minus:hover,\
					.woocommerce .quantity .plus:hover,\
					.woocommerce #content .quantity .plus:hover,\
					.woocommerce-page .quantity .plus:hover,\
					.woocommerce ul.woocommerce-error strong,\
					.woocommerce-page #content .quantity .plus:hover{ \
			            border-color: "+color+"; \
			        } \
			        .q_progress_bars_vertical .progress_content_outer .progress_content,  \
			        .qbutton, \
			        .load_more a, \
			        #submit_comment, \
			        .drop_down .wide .second ul li .qbutton, \
			        .drop_down .wide .second ul li ul li .qbutton, \
			        .qbutton.dark, \
			        .q_social_icon_holder .fa-stack, \
			        .single_tags a, \
			        .widget .tagcloud a, \
			        .animated_icon_inner span.animated_icon_back i, \
			        .woocommerce .button, \
		            .woocommerce-page .button, \
		            .woocommerce-page input[type='submit'], \
		            .woocommerce input[type='submit'], \
		            .woocommerce ul.products li.product .added_to_cart, \
		            .woocommerce .widget_price_filter .ui-slider .ui-slider-handle, \
		            .woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle, .price_table_inner ul li.table_title{ \
			            border-color: "+color+"; \
			        } \
					.q_tabs .tabs-nav li.active a,\
					.q_tabs .tabs-nav li a:hover{ \
			            border-top-color: "+color+"!important; \
			        } \
					.more_facts_button_arrow_inner{ \
			            border-color: "+color+" transparent transparent transparent; \
			        } \
					.icon_elegant_holder .fa-stack:hover .icon_elegant_arrow{ \
			            border-color: "+color+" transparent transparent transparent !important; \
			        } \
					.qbutton.transparent_button:hover{ \
			            border-color: "+color+" !important; \
			        } \
			        .social_share_holder:hover .social_share_icon{\
						background-image: url('http://demo.qodeinteractive.com/eden/demo_images/"+social_share+".png');\
					}\
					@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min--moz-device-pixel-ratio:1.5), only screen and (-o-min-device-pixel-ratio:150/100), only screen and (min-device-pixel-ratio:1.5), only screen and (min-resolution:160dpi) {\
						.social_share_holder:hover .social_share_icon{\
							background-image: url('http://demo.qodeinteractive.com/eden/demo_images/"+social_share+"@1_5x.png');\
						}\
					}\
					@media only screen and (-webkit-min-device-pixel-ratio:2.0), only screen and (min--moz-device-pixel-ratio:2.0), only screen and (-o-min-device-pixel-ratio:200/100), only screen and (min-device-pixel-ratio:2.0), only screen and (min-resolution:210dpi) {\
						.social_share_holder:hover .social_share_icon{\
							background-image: url('http://demo.qodeinteractive.com/eden/demo_images/"+social_share+"@2x.png');\
						}\
					}\
					";
				jQuery('body').append('<style id="toolbar_colors_css" type="text/css">'+newSkin+'</style>');
		});
	});
}); 

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

$j.fn.inlineStyle = function (prop) {
	 var styles = this.attr("style"),
		 value;
	 styles && styles.split(";").forEach(function (e) {
		 var style = e.split(":");
		 if ($j.trim(style[0]) === prop) {
			 value = style[1];           
		 }                    
	 });   
	 return value;
};