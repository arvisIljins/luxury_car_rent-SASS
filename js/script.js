//Gallery Modal
/*
let modal = document.getElementById("galleryModal");
let img = document.getElementById("onClick");
let modalImg = document.getElementById("gallery-image-1");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
let span = document.getElementsByClassName("modal__close")[0];
span.onclick = function () {
  modal.style.display = "none";
};*/
let modal = document.getElementById("galleryModal");
function myFunction(imgs) {
  modal.style.display = "block";
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
}
let span = document.getElementsByClassName("modal__close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
