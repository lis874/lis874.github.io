// $(document).ready(function(){
//          function getdate(){
//             var today = new Date();
//             var d = today.getDate();
//             var day = today.getDay();
//             var y = today.getFullYear();
//             var h = today.getHours();
//             var m = today.getMinutes();
//             var s = today.getSeconds();

//             //  if(s<10){
//             //      s = "0"+s;
//             //  }
//             //  if (m < 10) {
//             //     m = "0" + m;
//             // } 
//             // $(".date").text(h+" : "+m+" : "+s);
//             //  setTimeout(function(){getdate()}, 500);

//             $(".date").append(h+" : "+m+" : "+ s + d + day + y);
//             }

//    });



// $(function() {
  
//   function updateClock() {
//     var date = new Date();
  
//     $('.date').append(date); 
  
//   }

// });


var serverTime = new Date();

function updateTime() {
    /// Increment serverTime by 1 second and update the html for '#time'
    serverTime = new Date(serverTime.getTime() + 1000);
    $('.date').html(serverTime.toGMTString());
}

$(function() {
    updateTime();
    setInterval(updateTime, 1000);
});




////////////////////////////////////////////////////////////////////////////





var url1 = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=20712e5702ed4bce8678e38ad5926823';

var countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];


var country1 = countries[Math.floor(Math.random()*countries.length)];

var country2 = countries[Math.floor(Math.random()*countries.length)];

var country3 = countries[Math.floor(Math.random()*countries.length)];

var country4 = countries[Math.floor(Math.random()*countries.length)];

var country5 = countries[Math.floor(Math.random()*countries.length)];

var country6 = countries[Math.floor(Math.random()*countries.length)];

var country7 = countries[Math.floor(Math.random()*countries.length)];

var url1 = 'https://newsapi.org/v2/top-headlines?country=' + country1 + '&apiKey=ab37ca76aa144daba1d26e19ebae0dbc';

var url2 = 'https://newsapi.org/v2/top-headlines?country=' + country2 + '&category=business&apiKey=ab37ca76aa144daba1d26e19ebae0dbc';

var url3 = 'https://newsapi.org/v2/top-headlines?country=' + country3 + '&category=entertainment&apiKey=ab37ca76aa144daba1d26e19ebae0dbc';

var url4 = 'https://newsapi.org/v2/top-headlines?country=' + country4 + '&category=health&apiKey=ab37ca76aa144daba1d26e19ebae0dbc';

var url5 = 'https://newsapi.org/v2/top-headlines?country=' + country5 + '&category=SPORTS&apiKey=ab37ca76aa144daba1d26e19ebae0dbc';

var url6 = 'https://newsapi.org/v2/top-headlines?country=' + country6 + '&category=technology&apiKey=ab37ca76aa144daba1d26e19ebae0dbc';

var url7 = 'https://newsapi.org/v2/top-headlines?country=' + country7 + '&category=general&apiKey=ab37ca76aa144daba1d26e19ebae0dbc';

var assembleArticle = function(article) {
    var title = article.title;
    var author = article.author;
    var content = article.content;
    var source = article.source;  
    var description = article.description;
    var url = article.url;
    var image = article.urlToImage;
    var published = article.publishedAt
    var articleHTML = '<div class="article">' + title + author + description + image + '</div>';

    return articleHTML;
};


$.get(url1, function(data) {
  console.log('it worked', data);

 
  var randomArticle = data.articles[ Math.floor(Math.random() * data.articles.length) ];

  
  $('.headline1').append( randomArticle.title );
  $('.description1').append( randomArticle.description );
  $(".image1").attr("src", randomArticle.urlToImage);

  $(".headline1").click(function () {
       window.open(randomArticle.url);
      });


    }).fail(function(error) {
      console.log('it failed', error);
});



$.get(url2, function(data) {
  console.log('it worked', data);

    var randomArticle = data.articles[ Math.floor(Math.random() * data.articles.length) ];

    $('.headline2').append( randomArticle.title );
    $('.description2').append( randomArticle.description );
    $(".image2").attr("src", randomArticle.urlToImage);

    $(".headline2").click(function () {
       window.open(randomArticle.url);
      });

    }).fail(function(error) {
      console.log('it failed', error);
});



$.get(url3, function(data) {
  console.log('it worked', data);

    var randomArticle = data.articles[ Math.floor(Math.random() * data.articles.length) ];

   $('.headline3').append( randomArticle.title );
   $('.description3').append( randomArticle.description );
   $(".image3").attr("src", randomArticle.urlToImage);

    $(".headline3").click(function () {
       window.open(randomArticle.url);
      });

    }).fail(function(error) {
      console.log('it failed', error);
});



$.get(url4, function(data) {
  console.log('it worked', data);

    var randomArticle = data.articles[ Math.floor(Math.random() * data.articles.length) ];

   $('.headline4').append( randomArticle.title );
   $('.description4').append( randomArticle.description );
   $(".image4").attr("src", randomArticle.urlToImage);

    $(".headline4").click(function () {
       window.open(randomArticle.url);
      });

    }).fail(function(error) {
      console.log('it failed', error);
});
  

$.get(url5, function(data) {
  console.log('it worked', data);

    var randomArticle = data.articles[ Math.floor(Math.random() * data.articles.length) ];

   $('.headline5').append( randomArticle.title );
   $('.description5').append( randomArticle.description );
   $(".image5").attr("src", randomArticle.urlToImage);

    $(".headline5").click(function () {
       window.open(randomArticle.url);
      });

    }).fail(function(error) {
      console.log('it failed', error);
});


$.get(url6, function(data) {
  console.log('it worked', data);

    var randomArticle = data.articles[ Math.floor(Math.random() * data.articles.length) ];

   $('.headline6').append( randomArticle.title );
   $('.description6').append( randomArticle.description );
   $(".image6").attr("src", randomArticle.urlToImage);

    $(".headline6").click(function () {
       window.open(randomArticle.url);
      });

    }).fail(function(error) {
      console.log('it failed', error);
});


$.get(url7, function(data) {
  console.log('it worked', data);

    var randomArticle = data.articles[ Math.floor(Math.random() * data.articles.length) ];

   $('.headline7').append( randomArticle.title );
   $('.description7').append( randomArticle.description );
   $(".image7").attr("src", randomArticle.urlToImage);

    $(".headline7").click(function () {
       window.open(randomArticle.url);
      });

    }).fail(function(error) {
      console.log('it failed', error);
});






////////////////////////////////////////////////////////////////////////////


$(function(){
  console.log('hello')
});

var url= 'https://api.openweathermap.org/data/2.5/weather?zip=10011&units=imperial&APPID=304f0ab7f8f51d03ea3494dcc3847c71';
  
$.get(url, function(results) {
  // The get request fires a callback function when the API request finishes
  console.log(results);
  // The data object contains all the information returned in the API
  var weather = results.weather[0];
  var weathertext = results.weather[0].main;
  var weatherdescription = results.weather[0].description;
  var humidity = results.main.humidity;
  var temp = results.main.temp;
  var tempmin = results.main.temp_min;
  var tempmax = results.main.temp_max;


  // In this case, the most interesting bit of data is in the weather key
  // Now do something interesting with the data!
  $('.currenttemp').append(temp + 'F');
  $('.weathertxt').append(weatherdescription);
  $('.hitemp').append(tempmax + 'F');
  $('.lowtemp').append(tempmin + 'F');

  
});



////////////////////////////////////////////////////////////////////////////


 var quotes = 'https://api.adviceslip.com/advice';

$.getJSON(quotes, function(data) {
  console.log('it worked', data);

  var adviceSlip = data.slip.advice;
  console.log('adviceSlip', adviceSlip);


  $('.quotes').append('"' + adviceSlip + '"');


    }).fail(function(error) {
      console.log('it failed', error);
});


////////////////////////////////////////////////////////////////////////////



var dogs= 'https://dog.ceo/api/breeds/image/random';

$.getJSON(dogs, function(data) {
  console.log('dog', data);


  var dogpic = data.message;
  console.log('dogpic', dogpic);


  $('.dogpic').attr("src", dogpic );

    }).fail(function(error) {
      console.log('it failed', error);
});


////////////////////////////////////////////////////////////////////////////












