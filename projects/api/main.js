
var url1 = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8e128067979e4bbbadff446c3df57953';

var url2 = 'https://newsapi.org/v2/everything?q=Apple&apiKey=8e128067979e4bbbadff446c3df57953';

var url3 = 'https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=8e128067979e4bbbadff446c3df57953';

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

    var firstArticleDiv = assembleArticle(data.articles[0]);
    //give the 'assembleArticle' a var so that you can refer back to it

    $('.headline').append( assembleArticle(data.articles.title[1]) );


    }).fail(function(error) {
      console.log('it failed', error);
});



$.get(url2, function(data) {
  console.log('it worked', data);

    $('.article2').append( assembleArticle(data.articles[1]) );

    $('.article25').append( assembleArticle(data.articles[2]) );


    }).fail(function(error) {
      console.log('it failed', error);
});



$.get(url3, function(data) {
  console.log('it worked', data);


    $('.article3').append( assembleArticle(data.articles[2]) );

    }).fail(function(error) {
      console.log('it failed', error);
});

  // data.articles.forEach(function(article) {
  //   console.log('source:', article.source);
  //   console.log('title:', article.title);
  //   console.log('author:', article.author);
  //   console.log('description:', article.description);
  //   console.log('url:', article.url);
  //   console.log('urlToImage:', article.urlToImage);
  //   console.log('publishedAt:', article.publishedAt);
  //   console.log('content:', article.content);

  //   var title = article.title;
  //   var author = article.author;
  //   var content = article.content;
  //   var source = article.source;  
  //   var description = article.description;
  //   var url = article.url;
  //   var image = article.urlToImage;
  //   var published = article.publishedAt

  //   var articleHTML = '<div class="article">' + title + author + description + url + content + image + '</div>';

  //   $('.article1').append(articleHTML);


// }).fail(function(error) {
//   console.log('it failed', error);
// });





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
  var humidity = results.main.humidity;
  var temp = results.main.temp;


  // In this case, the most interesting bit of data is in the weather key
  // Now do something interesting with the data!
  $('.weather').append(temp + 'F');

  
});
