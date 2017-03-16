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

	var fullPassFields = $('div#fullPass').find(':input').not('#fake');
	var partyPassFields = $('div#partyPass').find(':input').not('#fake');
	var fullPassOwnerField =  $('input#visibleOwnerField');
	var partyPassOwnerField =  $('input#partyPassOwnerField');

	// activate form section in accordion
	$('#fullPassLink').click(function(){
		partyPassFields.prop( "disabled", true );
		fullPassFields.prop( "disabled", false );
		$('#wrkshpFormSubmit').prop( "disabled", false );
		fullPassOwnerField.prop( "disabled", false ).show();
		partyPassOwnerField.prop( "disabled", true ).hide();
		fullPassOwnerField.val(partyPassOwnerField.val());
	});
	$('#partyPassLink').click(function(){
		fullPassFields.prop( "disabled", true );
		partyPassFields.prop( "disabled", false );
		partyPassOwnerField.prop( "disabled", false ).show();
		fullPassOwnerField.prop( "disabled", true ).hide();
		partyPassOwnerField.val(fullPassOwnerField.val());
		$('#wrkshpFormSubmit').prop( "disabled", false );
	});

	// copy the Owner field to the Styling workshop 2:owner field
	$("input#visibleOwnerField,input#partyPassOwnerField").blur( function() {
		$("input.inVisibleOwnerField").val($(this).val());
	});

	$('#visibleRoleSelect').on('change', function() {
		console.log($('#visibleRoleSelect')[0].selectedIndex);
		$("select#inVisibleRoleSelect").prop('selectedIndex', $('#visibleRoleSelect')[0].selectedIndex);
		//$("input.inVisibleRoleField").val(this.value);
	});

	// toggle visibility of jnj options if jnj checkbox is checked
	$('.jnjOption').click(function(){
		var jnjDetailFields = $(this).parents('.row').siblings('.jnjDetails');
		jnjDetailFields.toggle();
		var selectFields = jnjDetailFields.find('select');
		selectFields.each(function(index){
			if ($(this).prop('required')) {
            $(this).prop('required', false);
        } else {
            $(this).prop('required', true);
        }
		});
		
	});
});

// FoxyCart Custom actions
var FC = FC || {};
FC.onLoad = function () {
	FC.client.on('ready.done', function () {
		$('#minicart').show();

		// when closing the side-cart
		FC.client.on('sidecart-hide', function(params) {

			$("form#fcform")[0].reset(); // reset the ticket form
			$('.jnjDetails').hide(); // collapse any previously revealed fields
			if (!$.isEmptyObject(FC.json.items)) { // update the minicart display with the cart contents
				$('#fcFormTitle').html('You<span data-fc-id="minicart-quantity">0</span> have '+FC.json.items.length+' tickets in your <a href="https://citadelswing.foxycart.com/cart?cart=view">cart</a>! Add more? :)');
			}
			return true;
		});


		FC.client.on('cart-submit', function(params, next) {
        $element = $(params.element);
				if ($element.attr('id') == 'fcform') { // this prevents errors when opening the minicart because it triggers the same cart-submit event as adding a product, so it checks that some tickets have really been added, and it's not just someone looking at the cart contents
					if (formCheck) { // the formCheck event gets fired byt the form validation library after validating the form. true if validation succeeded, false otherwise
						//console.log('proceedingn with sidecart');
						next();
					}else{// if cart validation fails
						$('html, body').animate({ // scroll to first error in form
						    scrollTop: ($('.has-error:visible:first').offset().top - $('.mobilenav').outerHeight(true) - 25)
						}, 1000);
					}
        }else{// if it's someone just looking at the side-cart
					next();
				}

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
