// JavaScript Document

$(document).ready(function() {
// begin Ready

	//...................................................
	// When the form changes
	$('#mapForm').change(function() {
	
		var selectedContinent = $('#mapForm option:selected').val();
		if (selectedContinent == 'ALL'){
			$('a.dot').slideDown(1000);
		}else{
			$('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
			$('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);
		}
		
	});
	
	//...................................................
	// When a dot is mouseover-ed
	$('a.dot').mouseover(function(){

		//$('a.dot').removeClass('selected');
		//$(this).addClass('selected');

		var city = '.cancercenter_detail#' + $(this).attr('cancercenter');
		var htmlCode = $(city).html();         

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .cancercenter_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});

// end Ready
});