
// Open the Modal
function openModal() {
document.getElementById("myModal").style.display = "block";
}

// Close the Modal

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
document.querySelector(".prev").addEventListener("click", function() {
  showSlides(slideIndex -= 1);
});

document.querySelector(".next").addEventListener("click", function() {
  showSlides(slideIndex += 1);
});

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}

// Image Event Listeners
document.querySelector(".k-proper").addEventListener("click", function() {
  if (window.innerWidth >= 768){
    openModal();currentSlide(1);
  }
  console.log(window.innerWidth);
});

document.querySelector(".k-cute").addEventListener("click", function() {
  if (window.innerWidth >= 768){
    openModal();currentSlide(2);
  }
  console.log("Kenai 2!");
});

document.querySelector(".k-window").addEventListener("click", function() {
  if (window.innerWidth >= 768){
    openModal();currentSlide(3);
  }
  console.log("Kenai 3!");
});

document.querySelector(".k-camp").addEventListener("click", function() {
  if (window.innerWidth >= 768){
    openModal();currentSlide(4);
  }
  console.log("Kenai 4!");
});

document.querySelector(".k-mermaid").addEventListener("click", function() {
  if (window.innerWidth >= 768){
    openModal();currentSlide(5);
  }
  console.log("Kenai 5!");
});

document.querySelector(".k-bear").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(6);
}
  console.log("Kenai 6!");
});

document.querySelector(".k-unicorn").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(7);
}
  console.log("Kenai 7!");
});

document.querySelector(".k-cardboard").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(8);
}
  console.log("Kenai 8!");
});

document.querySelector(".k-workout").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(9);
}
  console.log("Kenai 9!");
});

document.querySelector(".k-destructive").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(10);
}
  console.log("Kenai 10!");
});

document.querySelector(".k-grad").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(11);
}
  console.log("Kenai 11!");
});

document.querySelector(".k-tongue").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(12);
}
  console.log("Kenai 12!");
});

document.querySelector(".k-tent").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(13);
}
  console.log("Kenai 13!");
});

document.querySelector(".k-car").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(14);
}
  console.log("Kenai 14!");
});

document.querySelector(".k-cgc").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(15);
}
  console.log("Kenai 15!");
});

document.querySelector(".k-squirrel").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(16);
}
  console.log("Kenai 16!");
});

document.querySelector(".k-sewing").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(17);
}
  console.log("Kenai 17!");
});

document.querySelector(".k-cone").addEventListener("click", function() {
if (window.innerWidth >= 768){
  openModal();currentSlide(18);
}
  console.log("Kenai 18!");
});
