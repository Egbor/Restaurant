$(document).ready(function() {
	console.log("Test");
    $('#name, #date, #email').keyup(function() {
        if (($('#name').val() == '') || ($('#date').val() == '') || ($('#email').val() == '')) {
            $('#submit').prop('disabled', true).addClass('form-button-disabled');
        } else {
            $('#submit').prop('disabled', false).removeClass('form-button-disabled');
        }
    });
});