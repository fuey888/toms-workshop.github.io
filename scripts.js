// actual animation function referred to in timer function - takes 1500ms for full animation
function indextimer() {
  $("#indexcontainerfade").fadeIn(1500);
  // $ is a shortcut available for jQuery scripts: it is comparable to document.getElementById()
}

// sets timer on index fade animation for 200ms after loading - would be set for longer if nav icons appeared on a timer
const Timeout = setTimeout(indextimer, 200);

function menuIcon(x) {
  x.classList.toggle("change");
}

//This is the Javascript for the navbar
//  myFunction executes when page is scrolled
window.onscroll = function () {
  myFunction();
};

// selects navbar
var navbar = document.getElementById("navbar");

//  records the offset/scroll position of the navbar
var sticky = navbar.offsetTop;

// Add or remove sticky class when you reach the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// this is the script for our gallery modal (dialogue box). We first used CSS to create a modal hidden by default.
// This script triggers the modal and displays the current image inside the modal when clicked.

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $(".galleryImg"); // gets gallery image (thumb)
var modalImg = $("#img01"); // gets modal image - displays in modal
var captionText = document.getElementById("caption"); // gets caption
$(".galleryImg").click(function () {
  // function triggers on click
  modal.style.display = "block"; // modal displays as block
  var newSrc = this.src.replace(/thumb/, ""); // replaces thumbnail (galleryImg) with actual image by removing "thumb" from filename
  modalImg.attr("src", newSrc); //  non-thumb image assigned to modalImg
  captionText.innerHTML = this.alt; // alt text used as the caption text
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> close the modal. The x is there for user-friendliness, but you can click anywhere to close the modal.
span.onclick = function () {
  modal.style.display = "none";
};

// this is the function for buttons that change light and dark theme
function setStyleSheet(url) {
  var stylesheet = document.getElementById("stylesheet");
  stylesheet.setAttribute("href", url);
}
