
var menu=document.querySelector('.menu-toggler')
var topNav=document.querySelector('.top-nav')
menu.addEventListener("click", function(){
    menu.classList.toggle("open");
    topNav.classList.toggle("open")
  });
  var up=document.querySelector('#up')
  var body=document.querySelector('body')
  up.addEventListener("click", function(){
    window.scrollTo(0, 0);
  });

AOS.init({
  easing:'ease',
  duration:'1800'
})