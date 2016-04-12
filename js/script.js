$(function(){

/******************************
MENU
*****************************/
var menuButton = $('#menu').find('.img');

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


/**************************************
WORK PREVIEW - LINKS
**************************************/
var basicAnimationTime = 1500;
var links = $('#work').find('li');
console.log(links);
links.each(function(index){
  $(this).on('click',function(){
    var j = $(this).data('id'); //gets id from data set
    links.removeClass('activeLi');
    $(this).addClass('activeLi');
    imgHide();
    setTimeout(function(){
      imgShow(j);
    },basicAnimationTime);

  })
});

/**************************************
WORK PREVIEW - IMG HIDE
**************************************/
function imgHide(){
  var images = $('#preview').find('img');
  images.each(function(){
    $(this).fadeOut(basicAnimationTime);
  });
}
/**************************************
WORK PREVIEW - IMG SHOW
**************************************/
function imgShow(j){
  var activeImg = $('#preview').find('img:eq('+j+')');
  console.log(activeImg);
  activeImg.fadeIn(basicAnimationTime);
}

});
