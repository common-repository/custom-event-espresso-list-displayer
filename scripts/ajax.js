jQuery.noConflict();

jQuery(".showYear").live("click", function(event) {
	jQuery("#month_holder").hide();
	jQuery("#ajax-loader").show();	
		
	jQuery.post(	
		// see tip #1 for how we declare global javascript variables
		MyAjax.ajaxurl,
		{		
			// here we declare the parameters to send along with the request
			// this means the following action hooks will be fired:
			// wp_ajax_nopriv_myajax-submit and wp_ajax_myajax-submit
			action : 'update-events-submit',
			year: jQuery(this).data('year'),
			month: jQuery("#months li.active a").attr('id')
		},
		function( response ) {
			jQuery("#ajax-loader").hide();
			jQuery("#displayer_holder").html(response);
		}
	);
});