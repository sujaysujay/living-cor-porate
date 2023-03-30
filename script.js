const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


var imageContainer = document.getElementById("image-container");
var timeBar = document.getElementById("time-bar");
var images = imageContainer.getElementsByTagName("img");
var timePerImage = 3000; 
let currentImageIndex = 0;
let currentTime = 0;
images[currentImageIndex].classList.add("active");
timeBar.style.width = "0%";
setInterval(() => {
  currentTime += 100; 
  var progress = (currentTime / timePerImage) * 100;
  timeBar.style.width = `${progress}%`;
  if (currentTime >= timePerImage) {
  
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
    currentTime = 0;
  }
}, 100);

var sentences = [
    "we are an answered prayer.",
    "support black women at work.",
    "radical change.",
    "the dialy beast.",
  ];
  let i = 0;
  var sentenceContainer = document.getElementById("sentence-container");
  function displayNextSentence() {
    sentenceContainer.textContent = sentences[i];
    i++;
    if (i >= sentences.length) {
      i = 0;
    }
  }
  setInterval(displayNextSentence, 3000);


var bro = document.querySelectorAll("#page5-elems")
bro.forEach(function(elems){
  elems.addEventListener("mouseenter", function () {
    elems.childNodes[1].style.scale = 1
  })
  elems.addEventListener("mouseleave", function () {
    elems.childNodes[1].style.scale = 0
  })
  elems.addEventListener("mousemove", function (dets) {
    elems.childNodes[1].style.left = `${dets.x}px`
  })
})

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});


var flag = 0
document.querySelector("#nav-prt2").addEventListener("click",function(){
  if(flag == 0){
  document.querySelector("#nav-full").style.top = 0;
  document.querySelector("#nav").style.backgroundColor = "#000";
  document.querySelector("#nav-prt1 h1").style.color = "white";
  document.querySelector("#signup").style.color = "#fff";
  document.querySelector("#nav-prt3 i").style.color = "#fff";
  document.querySelector(".line1").style.rotate= "45deg";
  document.querySelector(".line2").style.width = 0;
  document.querySelector(".line3").style.rotate = "-45deg";
  document.querySelector(".line1").style.backgroundColor = "#fff";
  document.querySelector(".line3").style.backgroundColor  = "#fff";
  flag = 1
  }else{
  document.querySelector("#nav-full").style.top = "-100%";
  document.querySelector("#nav").style.backgroundColor = "#fff";
  document.querySelector("#nav-prt1 h1").style.color = "black";
  document.querySelector("#signup").style.color = "#000";
  document.querySelector("#nav-prt3 i").style.color = "#000";
  document.querySelector(".line1").style.rotate = "0deg";
  document.querySelector(".line2").style.width = "53px";
  document.querySelector(".line3").style.rotate = "0deg";
  document.querySelector(".line1").style.backgroundColor = "#000";
  document.querySelector(".line3").style.backgroundColor  = "#000";

  flag = 0
  }
})
var tl = gsap.timeline();
tl.from("#nav",{
  y:-50,
  duration:1,
  delay:.5,
  opacity:0,
})
tl.from("#right",{
  y:"100%",
  duration:1,
  delay:.5
})

tl.from("#left",{
  y:"100%",
  duration:1,
  delay:.5
})
tl.from("#sentence container",{
  y:"50%",
  opacity:0,
  duration:1,
  delay:-.5
})
tl.from("#image container",{
  y:"50%",
  opacity:0,
  duration:1,
  delay:-.5
})

window.addEventListener("resize",function(){
  location.reload()
})