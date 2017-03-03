$( document ).ready(function() {
    //console.log( "ready!" );
		//$(".mobilenav").css('display', 'block');

	$('.w-dropdown-toggle').click(function(){
		$(this).next('.w-dropdown-list').toggleClass('w--open');
	});

	$('.w-nav-button').parents('.w-nav').append('<div class="w-nav-overlay"></div>');

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

	$('#fcform').on('form.validated.bs.validator', function() {
			var validator = $(this).data('bs.validator');

			if (!validator.hasErrors()){
				formCheck = true;
			 console.log('No errors found');
		 }else{
			formCheck = false;
			 console.log('Some errors present');
		 }
	});

	var fullPassFields = $('#fullPass').find(':input').not('#fake');
	var partyPassFields = $('#partyPass').find(':input').not('#fake');

	// activate form section in accordion
	$('#fullPassLink').click(function(){
		partyPassFields.prop( "disabled", true );
		fullPassFields.prop( "disabled", false );
		$('#wrkshpFormSubmit').prop( "disabled", false );
	});
	$('#partyPassLink').click(function(){
		fullPassFields.prop( "disabled", true );
		partyPassFields.prop( "disabled", false );
		$('#wrkshpFormSubmit').prop( "disabled", false );
	});
	// copy the Owner field to the Styling workshop 2:owner field
	$("input#visibleOwnerField").blur( function() {
    //console.log($(this).val());
		$("input.inVisibleOwnerField").val($(this).val());
		//( $('input[id$=search_field]').val() );
	});
});



var FC = FC || {};
FC.onLoad = function () {
	FC.client.on('ready.done', function () {
		$('#minicart').show();

		FC.client.on('sidecart-hide', function(params) {
			//console.log('bu!');

			$("form#fcform")[0].reset();
			if (!$.isEmptyObject(FC.json.items)) {
				$('#fcFormTitle').html('You<span data-fc-id="minicart-quantity">0</span> have '+FC.json.items.length+' tickets in your <a href="https://citadelswing.foxycart.com/cart?cart=view">cart</a>! Add more? :)');
			}
			return true;
		});



		FC.client.on('cart-submit', function(params, next) {
        $element = $(params.element);
				if ($element.attr('id') == 'fcform') { // this prevents errors when opening the minicart because it triggers the same cart-submit event as adding a product
					if (formCheck) {
						//console.log('proceedingn with sidecart');
						next();
					}
        }else{
					next();
				}
				//console.log('bu');
				//console.log(formCheck);
				//$('form#fcform').validator('validate');

		});

		// FC.client.on('cart-submit', function(params, next) {
    //     $element = $(params.element);
    //     if (
		// 			  $element.attr('id') == 'fcform'
		// 			  && (
		// 					(
		// 						$element.find('[name="owner"]').length > 0
		// 			  		&& !$element.find('[name="owner"]').val()
		// 					) ||
		// 					(
		// 						$element.find('[name="role"]').length > 0
		// 				  	&& !$element.find('[name="role"]').val()
		// 					) ||
		// 					(
		// 						$element.find('[name="level"]').length > 0
		// 				  	&& !$element.find('[name="level"]').val()
		// 					)
		// 				)
		// 			)
		// 		{
    //         //alert('Date must be filled out');
    //     } else {
    //         next();
    //     }
    // });

	});
};
