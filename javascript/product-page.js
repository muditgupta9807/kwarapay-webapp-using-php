$(document).ready(function () {

	// detect click for 
	$('.steps-section').on('click', '.slick-dots li', function(){
		
		//report
		/*RPT_AddVariables('wa_lnk', );
        RPT_RecordEvent();*/
        //console.log();
	});

	// arrow
	$('.steps-slider').on('afterChange', function(event,slick, currentSlide){
		var step = currentSlide+1,
			stepName = $(this).data('stepstn');

		// report
		RPT_AddVariables('wa_lnk', stepName+step, 'wa_tp', 1);
        RPT_RecordEvent();
	});

    $(".steps-slider").slick({
        dots: true
    });

});



$(document).ready(function(){
	$(".story-group").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		centerMode: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					centerMode: false

				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					centerMode: false
				}
			}
		]

	});

});