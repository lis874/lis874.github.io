$(document).ready(
    function(){
        
    $('#myRange').change(function() {
        var value = $(this).val();
        console.log('value', value);

        $('.images').html('<img src="assets/' + value + '.png">');

       
    });

});



