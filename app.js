$(document).ready(function() {

  var showAframeScene = function(callback){
    $('.a-canvas').show(100,callback);
  };
  var hideAframeScene = function(callback){
    $('.a-canvas').hide();
  };
document.addEventListener('renderstart',function(){
  document.querySelector('.a-enter-vr-button').addEventListener('click',function(event){
      var videoElement = document.querySelector('#video');

      videoElement.play();
  });
});


});
