$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.nav').addClass('affix');
    console.log("OK");
  } else {
    $('.nav').removeClass('affix');
  }
});

$('.hamburguesa').click(function() {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});
