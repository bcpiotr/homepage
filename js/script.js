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
var images = $('#preview').find('img'); //array of images
function imgHide(){
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
  checkButtons(j);
}
/**************************************
WORK PREVIEW - NEXT/PREV HIDE/SHOW
**************************************/
function checkButtons(j){
  console.log('test');
  if (j === images.length-1) {
    $('#preview').find('.arrowNext').css('display','none'); //hides next arrow at the end of gallery
  }
  else if (j === 0) {
    $('#preview').find('.arrowPrev').css('display','none');
  }
  else {
    $('#preview').find('.arrowNext').css('display','block'); //shows next arrow
    $('#preview').find('.arrowPrev').css('display','block');
  }
};

/**************************************
WORK PREVIEW - NEXT BUTTON
**************************************/
var nextBtn = $('#preview').find('.arrowNext');
console.log(nextBtn);

nextBtn.on('click',function(){
  var id = $('#work').find('.activeLi'); //checks which link is active
  j = id.data('id');
  id.toggleClass('activeLi').next().toggleClass('activeLi');
  imgHide();
  setTimeout(function(){
    imgShow(id.data('id')+1);
  },basicAnimationTime);
});

/**************************************
WORK PREVIEW - PREV BUTTON
**************************************/
var prevBtn = $('#preview').find('.arrowPrev');

prevBtn.on('click',function(){
  var id = $('#work').find('.activeLi'); //checks which link is active
  j = id.data('id');
  id.toggleClass('activeLi').prev().toggleClass('activeLi');
  imgHide();
  setTimeout(function(){
    imgShow(id.data('id')-1);
  },basicAnimationTime);
});

/**************************************
WORK PREVIEW - ONMOUSE EVENT
**************************************/
$('#preview').on('mouseover', function(){
  $('div[class*="arrow"]').css('opacity','1');
});
$('#preview').on('mouseout', function(){
  $('div[class*="arrow"]').css('opacity','0');
});

/**************************************
PROGRESS BARY
**************************************/
$(window).on('scroll',function(){
  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    },6000);
  });
});



//
});
