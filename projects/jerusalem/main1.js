 $( function() {

    $('.pic').mouseover(function() {
       $(this).siblings('.pic').css('z-index', 10);
       $(this).css('z-index', 11);
    });



    $( ".pic1" ).click(function(){
        $(".cap1").toggle();
    });

    $( ".pic2" ).click(function(){
        $(".cap2").toggle();
    });

    $( ".pic3" ).click(function(){
        $(".cap3").toggle();
    });

    $( ".pic4" ).click(function(){
        $(".cap4").toggle();
    });

    $( ".pic5" ).click(function(){
        $(".cap5").toggle();
    });

    $( ".pic6" ).click(function(){
        $(".cap6").toggle();
    });

    $( ".pic7" ).click(function(){
        $(".cap7").toggle();
    });

    $( ".pic8" ).click(function(){
        $(".cap8").toggle();
    });

    $( ".pic9" ).click(function(){
        $(".cap9").toggle();
    });

    $( ".pic10" ).click(function(){
        $(".cap10").toggle();
    });

    $( ".pic11" ).click(function(){
        $(".cap11").toggle();
    });

    $( ".pic13" ).click(function(){
        $(".cap13").toggle();
    });

    $( ".pic14" ).click(function(){
        $(".cap14").toggle();
    });

    $( ".pic15" ).click(function(){
        $(".cap15").toggle();
    });

    // $('.pic1').one("mouseover",function() {
    //    $(this).append('JEBUSITE/PRE-ISRAELITE')
    // });


    $('img').on('dblclick', function() {
       $(this).toggleClass('big');
       return false;
    });


    var $draggable = $('.pic').draggabilly();

    $( ".p1" ).click(function(){
        $(".pic1").toggle();
    });

    $( ".p2" ).click(function(){
        $(".pic2").toggle();
    });

    $( ".p3" ).click(function(){
        $(".pic3").toggle();
    });

    $( ".p4" ).click(function(){
        $(".pic4").toggle();
    });

     $( ".p5" ).click(function(){
        $(".pic5").toggle();
    });

    $( ".p6" ).click(function(){
        $(".pic6").toggle();
    });

    $( ".p7" ).click(function(){
        $(".pic7").toggle();
    });

    $( ".p8" ).click(function(){
        $(".pic8").toggle();
    });

    $( ".p9" ).click(function(){
        $(".pic9").toggle();
    });

     $( ".p10" ).click(function(){
        $(".pic10").toggle();
    });

    $( ".p11" ).click(function(){
        $(".pic11").toggle();
    });

    $( ".p13" ).click(function(){
        $(".pic13").toggle();
    });

    $( ".p14" ).click(function(){
        $(".pic14").toggle();
    });

    $( ".p15" ).click(function(){
        $(".pic15").toggle();
    });




  
  //    $(".p14").one("click", function() {
		// $('.images14').append('<div class="pic pic2"> <img  src="assets/15.gif"> </div>').draggable();
  //   });

 
 });

     