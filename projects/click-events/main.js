var images = ["1.gif","2.gif","3.gif","4.gif", "5.gif","6.gif", "7.gif", "8.gif", "9.gif", "10.gif"];

$(function() {
    $('.change').click(function(e) {
    var image = images[Math.floor(Math.random()*images.length)];
        $('#bg').parent().fadeOut(200, function() {
            $('#bg').attr('src', ''+image); 
              $(this).fadeIn(200);
        });
    });
});






