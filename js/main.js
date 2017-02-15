$(document).ready(function() {

  $(".signin").click(function(){
    $('.modal').fadeIn("slow");



});

$(".close").click(function(){
  $('.modal').fadeOut("slow");

});

$(".submit").click(function(){

$('input').addClass('error');

});

$("input").hover(function(){
  $(this).removeClass('error');

});

// $(".modal").click(function(){
//   $('.modal').fadeOut("slow");
//
// });






});
