$(document).ready(function() {
    $('#name, #date, #email').keyup(function() {
        if (($('#name').val() == '') || ($('#date').val() == '') || ($('#email').val() == '')) {
            $('#submit').prop('disabled', true).addClass('form-button-disabled');
        } else {
            $('#submit').prop('disabled', false).removeClass('form-button-disabled');
        }
    });
    $('#submit').click(function() {
    	alert("Message");
    });
});