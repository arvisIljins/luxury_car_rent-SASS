//Gallery Modal
let modal = document.getElementById("galleryModal");
function myFunction(imgs) {
  modal.style.display = "block";
  let expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
}
let span = document.getElementsByClassName("modal__close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// Mobile Nav
function changeIcon() {
  let icon = document.getElementById("navIcon");
  let menu = document.getElementById("navigationMenu");
  let menuList = document.getElementById("mobileMenu");
  if (icon.className === "navigation__icon") {
    icon.className = "navigation__icon--close";
    menu.className = "nav_menu-mobile";
    menuList.style.display = "block";
  } else {
    icon.className = "navigation__icon";
    menu.className = "sidebar__container";
    menuList.style.display = "none";
  }
}

//Book Now Modal

function bookNow() {
  let bookNow = document.getElementById("myModal");
  let close = document.getElementsByClassName("close")[0];

  bookNow.style.display = "block";

  close.onclick = function () {
    bookNow.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == bookNow) {
      bookNow.style.display = "none";
    }
  };
}
