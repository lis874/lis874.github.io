
$(function() {

	
      $(document).ready(function(){

            $('.adj1').html('...');
             $('.celeb').html('...');
             $('.place').html('...');
             $('.artsupply').html('...');
             $('.body').html('...');
             $('.noun1').html('...');
             $('.noun2').html('...');
             $('.pnoun1').html('...');
             $('.pnoun2').html('...');
             $('.pnoun3').html('...');
             $('.verb').html('...');
             $('.number').html('...');
             $('.food').html('...');
             $('.artist').html('...');

      });



      $('.button').click(function(){
          var url = $(this).data('url');
          console.log(url)
          $(this).addClass('active');

      $.get(url, function(data) {
      console.log(data);

 		 $('.adj1').html(data.adjective1);
 		 $('.celeb').html(data.celebrityName);
 		 $('.place').html(data.placeInNewYork);
 		 $('.artsupply').html(data.artSupply);
 		 $('.body').html(data.bodyPart);
 		 $('.noun1').html(data.noun1);
 		 $('.noun2').html(data.noun2);
 		 $('.pnoun1').html(data.pluralNoun1);
 		 $('.pnoun2').html(data.pluralNoun2);
 		 $('.pnoun3').html(data.pluralNoun3);
 		 $('.verb').html(data.verbEndingInIng);
 		 $('.number').html(data.numbers.join(', '));
 		 $('.food').html(data.foods.join(', '));
 		 $('.artist').html(data.artistName);



	}).fail(function() {
  		console.log('Error in GET request. Handle the error gracefully.');
            $('.adj1').html('...');
             $('.celeb').html('...');
             $('.place').html('...');
             $('.artsupply').html('...');
             $('.body').html('...');
             $('.noun1').html('...');
             $('.noun2').html('...');
             $('.pnoun1').html('...');
             $('.pnoun2').html('...');
             $('.pnoun3').html('...');
             $('.verb').html('...');
             $('.number').html('...');
             $('.food').html('...');
             $('.artist').html('...');

	});
});

});

/*
{
      "adjective1": "Morose",
      "adjective2": "Quirky",
      "artSupply": "PVC Glue",
      "computerSoftware": "MindSweeper",
      "websiteName": "Habbo",
      "artistName": "Adrian Frutiger",
      "celebrityName": "Eddie Redmayne",
      "noun1": "Dog",
      "noun2": "Maxi Pad",
      "pluralNoun1": "Printers",
      "pluralNoun2": "PopSockets",
      "pluralNoun3": "Plastic Straws",
      "verbEndingInIng": "squeezing",
      "placeInNewYork": "MoMA",
      "bodyPart": "Elbow",
      "numbers": [3, 72, 108, 33, 13],
      "foods": ["Grapes", "Honeycomb", "Ice Cubes", "King Crab Leg"]
}

*/