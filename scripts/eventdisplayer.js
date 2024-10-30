/*



 Show/Hide Events v1.4

 

 Use eventdisplay.css for basic styling.

 On landing page for events months will be automatically created and linked to the function below

 in a "month holder". Any updates to the core code will need to be changed here too.

 

 Integration taken from a custom integration - http://jqueryfordesigners.com/jquery-tabs/



 Date: Wed 18 Jan 19:34:00 2012 GMT



*/

jQuery.noConflict();

jQuery(document).ready(function(){				
	jQuery('#months li a').live('click', function (e) {
		console.log("HERE");
		e.preventDefault();
		
		if(!jQuery(this).parent().hasClass('inactive')) {
			jQuery("#month_holder > div").hide().fadeOut();
			jQuery("#month_holder div"+this.hash).fadeIn();
			
			jQuery('#months li').removeClass('active');
			jQuery(this.parentNode).addClass('active');

			return false;
		}
		return;
	});	
});



