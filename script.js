var checkVar = setInterval (checkPage, 500); // calls checkPage every .5 seconds to see if window is in focus

function checkPage(){
  if(document.hasFocus()){ // if the tab is in focus
    $('.intro').addClass('wipe'); // adds a class with the animation to '.loader'
    $('.content').addClass('content-reveal'); // adds class to reveal all content
    clearInterval(checkVar); // this stops setInterval from looping unnecessarily
  }
}

// if page reloads, scroll to the top

$(document).ready(function(){
    $(this).scrollTop(0);
});

// When any of the navigation elements are clicked, add/remove classes for animation

$(function() {
  $('.button').click( function() {
      $('html').toggleClass('menu-scroll');
      $(".button").toggleClass("change");
      $('.navigation-back').toggleClass('nav-bg');
      $('.nav-menu').toggleClass('nav-reveal');
      $('.nav-menu div').toggleClass('link-reveal');
  } );
  $('.site-links a').click( function() {
      $('html').toggleClass('menu-scroll');
      $(".button").toggleClass("change");
      $('.navigation-back').toggleClass('nav-bg');
      $('.nav-menu').toggleClass('nav-reveal');
      $('.nav-menu div').toggleClass('link-reveal');
  } );
});

// removes abilty to scroll right/left _incase_ unknown padding shows up

document.addEventListener('DOMMouseScroll', function(e) {
    if (e.axis == e.HORIZONTAL_AXIS) {
        e.stopPropagation();
        e.preventDefault();
        e.cancelBubble = false;
    }
    return false;
}, false);
