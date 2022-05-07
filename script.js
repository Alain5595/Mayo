jQuery('document').ready(function($){
	
	var menuBtn = $('.menu');
	var menus = $('.navegador ul');

menuBtn.click(function(){
	
	if(menus.hasClass('show')){
		
		menus.removeClass('show');

		} else{
			menus.addClass('show');
		}
	});
});