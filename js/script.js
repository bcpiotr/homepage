$(function(){

/******************************
MENU
*****************************/
var menuButton = $('#menu').find('.img');

console.log(menuButton);

menuButton.on('mouseover',function(){
  $(this).find('img').attr("src","img/elipsa_blue.png");
});

menuButton.on('mouseout',function(){
  $(this).find('img').attr("src","img/elipsa.png");
});


menuButton.on('click',function(){
  if ($(this).attr('id') == 'about') {
    aboutMeElipsis.trigger( "click" );
  }
});

/**************************************
ELIPSIS
**************************************/
// AboutMe elipsis
var aboutMeElipsis = $('#aboutMeElipsis');
aboutMeElipsis.on('click',function(){

  $(this).parent().toggleClass("limitedHeightAboutMe").toggleClass("unlimitedHeight");

  aboutMeElipsis.toggleClass("fa-caret-square-o-down").toggleClass("fa-caret-square-o-up");
})


});
