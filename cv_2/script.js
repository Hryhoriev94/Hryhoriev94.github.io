$(function() {
	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);
	
	$('.post').not(get_current).hide(3000);
	get_current.show(3000);
	});

	$('#showall').click(function() {
		$('.post').show(3000);
	});
});

$(document).ready(function(){
$('.owl-carousel').owlCarousel({
	responsive:{
	0:{
		items:2
	},
	568:{
		items:3
	},
},
	navText : ['&lt;','&gt;'],
	nav: true,
	loop: true,
	autoplay:true, 
 	autoplayHoverPause:true,
 	dots: false,
});
});