
$(document).ready(function(){
  $(".receipt").one( "click", function() {
    $("#posFix").animate({top: '-5vw'}) ({left: '28vw'});
    $(".receipt").css("position", "relative");
  });
});


//receipt is stuck until you click
var n = 0;
$( ".receipt" ).one( "click", function() {
  var index = $( ".receipt" ).index( this );
  $( this ).css({
    position: "absolute",
    // cursor: "auto"
  });
  
});


// function PlaySound(){
//     var sound = document.getElementById("audio");
//     sound.play()

// }


$(function() {
    // all code goes in here
    $(".food-item").click(function() {
        var item = $(this);
        var description = item.data('description');

        $('.description1-content').html(description);
        $('.description1').show('slow');

    });


}); // end ready function


    $( ".category0" ).click(function() {
    $( ".category1" ).toggle();
    $( ".category2" ).toggle();
    $( ".category3" ).toggle();
    $( ".category4" ).toggle();
    $( ".category5" ).toggle();
    });

    $( ".category1" ).click(function() {
    $( ".category2" ).toggle();
    $( ".category3" ).toggle();
    $( ".category4" ).toggle();
    $( ".category5" ).toggle();
    });

    $( ".category2" ).click(function() {
    $( ".category3" ).toggle();
    $( ".category4" ).toggle();
    $( ".category5" ).toggle();
    });

    $( ".category3" ).click(function() {
    $( ".category4" ).toggle();
    $( ".category5" ).toggle();
    });

    $( ".category4" ).click(function() {
    $( ".category5" ).toggle();
    });
// working example

     $( ".category0" ).click(function() {
$( ".food" ).toggle();

});
    $( ".category1" ).click(function() {
$( ".clothing" ).toggle();

});

    $( ".category2" ).click(function() {
$( ".misc" ).toggle();

});

 $( ".category3" ).click(function() {
$( ".makeup" ).toggle();

});

 $( ".category4" ).click(function() {
$( ".stationery" ).toggle();

});

 $( ".category5" ).click(function() {
$( ".transportation" ).toggle();

});

$(document).ready(
    function(){
        $(".byline").click(function () {
            $(".description").show("slow");
        });

    });

$(document).ready(
    function(){
        $(".button").click(function () {
            $(".description").hide("slow");
        });

    });

$(document).ready(
    function(){
        $(".button1").click(function () {
            $(".description1").hide("slow");
        });

    });


$(function() {
    // all code goes in here
    $(".food-item").click(function() {
        var item = $(this);
        var description = item.data('description');

        $('.description1-content').html(description);
        $('.description1').show('slow');

    });


}); // end ready function


// var acc = document.getElementsByClassName("category");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var food = this.nextElementSibling;
//     if (food.style.display === "block") {
//       food.style.display = "none";
//     } else {
//       food.style.display = "block";
//     }
//   });
// }


// var acc = document.getElementsByClassName("category0");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var foodCondense = this.nextElementSibling;
//     if (foodCondense.style.display === "block") {
//       foodCondense.style.display = "none";
//     } else {
//       foodCondense.style.display = "block";
//     }
//   });
// }



