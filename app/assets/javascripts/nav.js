$("#menu").click(function(){
  $("#nav").slideToggle();
});
$(window).resize(function(){
  if(window.innerWidth > 768) {
    $("#nav").removeAttr("style");
  }
});