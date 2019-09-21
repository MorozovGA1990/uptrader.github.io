$(document).ready(function(){
	$('#item1').hover(function(){
		$('#cir1').toggleClass('active');
	});
	$('#item2').hover(function(){
		$('#cir2').toggleClass('active');
	});
	$('#item3').hover(function(){
		$('#cir3').toggleClass('active');
	});
});

$(document).ready(function(){
	$('#arr1').click(function(){
		$('#hid1').toggleClass('hidden-container-active');
		$('#arr1').toggleClass('arrow-reverse');
	});
});