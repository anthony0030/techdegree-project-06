const captionsContainer = document.querySelector("div.captions-text");
// const captions = document.querySelectorAll("span.caption");
// const captionP = document.querySelectorAll("p.caption-p");
const vid = document.getElementById("video1");
var oldActive = document.querySelector("[value='"+Math.round(vid.currentTime)+"']");


captionsContainer.addEventListener('click', function(e){
  var time = e.target.getAttribute("value");
  // console.log(time);
  if (time !== null) {
    document.getElementById('video1').currentTime = time;
    document.getElementById('video1').play();
  }
});


vid.addEventListener('timeupdate', function(){
  var curentActive = document.querySelector("[value='"+Math.round(vid.currentTime)+"']");
  // console.log(curentActive);
  if(curentActive !== null){
    curentActive.classList.add("active-text");
    if(oldActive !== curentActive){
      oldActive.classList.remove("active-text");
      oldActive = curentActive;
    }
  }
  // console.log(Math.round(vid.currentTime));
  // console.log(document.querySelectorAll("[value='"+Math.round(vid.currentTime)+"']"));
});