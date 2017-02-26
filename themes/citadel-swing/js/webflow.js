$( document ).ready(function() {
    //console.log( "ready!" );
		//$(".mobilenav").css('display', 'block');

	$('.w-dropdown-toggle').click(function(){
		$(this).next('.w-dropdown-list').toggleClass('w--open');
	});

	$('.w-nav-button').parents('.w-nav').append('<div class="w-nav-overlay"></div>')

	$('.w-nav-button').click(function(){
		var on = $(this).data('on');
		//$(this).toggleClass('w--open');
		var source = $(this).prev('.w-nav-menu');
		var dest = $(this).parents('.w-nav').children('.w-nav-overlay');
		source.toggleClass('w--nav-menu-open').children('a').toggleClass('w--nav-link-open');
		source.detach();
		(dest).append(source);
		if (on) {
			dest.slideUp();
		}else{

			dest.css('height', '1000px').slideDown();
		}
		$(this).data("on", !on);
	});


	$(".shceduleMoreLink").click(function(){
		$(".cellDetailsVisible").removeClass("cellDetailsVisible");
		//$(".shceduleMoreLink")
		if ($(this).hasClass("active")) {
			$(".detailsRow").hide();
			$(".rowDetailsVisible").removeClass("rowDetailsVisible");
			$('.shceduleMoreLink').removeClass("active").children("span").text("+");
		}else{
			$('.shceduleMoreLink').removeClass("active").children("span").text("+");
			$(".detailsRow").hide();
			$(this).children("span").text("-");
			$(this).addClass("active").parent().addClass("cellDetailsVisible").siblings().first().addClass("cellDetailsVisible");
			var clickedIndex = $(this).parents("tr").children().index($(this).parent());
			//alert(clickedIndex);
			$(this).parents("tr").addClass("rowDetailsVisible").nextAll().eq(clickedIndex-1).slideDown(1000);
		}
	});


});
