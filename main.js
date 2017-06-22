$(function () {

	$listInput = $('#listInput');
	$button = $('#enter');
	$list = $('ol');
	$doneButton = $('.doneButton');
	var userInput = '';

	$button.click( function (event) {
		event.preventDefault();
		$userInput = $listInput.val();
		if (($userInput != '') && ($userInput.length < 40)) {
			$('ol').append('<li><p>' + $userInput + '</p> <button class="doneButton">done</button></li>');
			$('#listInput').val('');
			console.log($userInput.length);
		}
		
	});

	$listInput.keyup(function(event){
    	if(event.keyCode == 13){
        	event.preventDefault();
			$userInput = $listInput.val();
			if (($userInput != '') && ($userInput.length < 40)) {
				$('ol').append('<li><p>' + $userInput + '</p> <button class="doneButton">done</button></li>');
				$('#listInput').val('');
			}
	    }
	});

	$('ol').on('click', '.doneButton', function (event) {
		
		if ($(this).hasClass('green')) {
			$(this).parent().slideUp();
		} else {
			$(this).addClass('green');
		}
		
	});




});



