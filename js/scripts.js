<<<<<<< HEAD
$(document).ready(function() {
	var span = $("span");
	span.each(function(index, element) {
	    if (index % 2 === 0) {
			$(element).css('color', 'red');
		};
	});
=======
var span = $("span");
    span.each(function(index, element) {
    	if(index % 2 === 0) {
		$(element).css('color', 'red');
	};
});
>>>>>>> ee9fe1a96bb6048f19d4a951407b0a001d41dcf9

	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
		$(element).append(button);
	});

<<<<<<< HEAD
	$("button").on("click", function() {
		alert($(this).attr("data-tmp"));
	});
});
=======
$("button").on(function(){
	alert($(this).attr("data-tmp"));
});
>>>>>>> ee9fe1a96bb6048f19d4a951407b0a001d41dcf9
