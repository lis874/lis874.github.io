var documentHeight = $(document).height();
var windowHeight = $(window).height();

$('body').append('.loading');

var $percentageIndicator = $('.loading');

$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();
  var percentage = scrollTop / (documentHeight - windowHeight) * 100;

  console.log(percentage + '%');

  $percentageIndicator.css({ width: percentage + '%' });
});