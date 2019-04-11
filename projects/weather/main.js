$(function(){
	console.log('hello')
});

var url= 'http://api.openweathermap.org/data/2.5/weather?zip=11101&units=imperial&APPID=304f0ab7f8f51d03ea3494dcc3847c71'

$.get(url, function(data) {
  // The get request fires a callback function when the API request finishes
  console.log(data);
  // The data object contains all the information returned in the API
  var weather = data.weather[0];
  var weathertext = data.main;
  var humidity = data.main.humidity;
  var temp = data.main.temp;


  // In this case, the most interesting bit of data is in the weather key
  // Now do something interesting with the data!
  $('body').append(temp + 'F');
  $('body').append('<a href="http://teaching.synopticoffice.com/course/f18_pucd_2035c/projects/li/final/index.html" class="link>" What? </a>');

 
});


$.get(url, function(results){

	
	weathertext = results.weather[0].main;


for(var counter=0; counter< 1; counter++){
	console.log('counter', counter);
	console.log('weathertext', weathertext);


          if(weathertext == 'Rain'){

             $('body').append('<div class="videos"><video width="520" height="440" controls autoplay loop class="video1"><source src="assets/rainingmen.mp4" type="video/mp4"></video></div>');
                    
        }
    
        	if(weathertext == 'Clear'){
                $('body').append('<div class="videos"><video width="520" height="440" controls autoplay loop class="video1"><source src="assets/walkingonsunshine.mp4" type="video/mp4"></video></div>');
             }

          if(weathertext == 'Clouds'){
                $('body').append('<div class="videos"><video width="520" height="440" controls autoplay loop class="video1"><source src="assets/cloudnine.mp4" type="video/mp4"></video></div>');
             }
      }
});



