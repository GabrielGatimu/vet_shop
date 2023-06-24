// ---- change content ---- //
var contentIndex = 0;
changeContent();
function changeContent() {
  var i;

  var content = document.getElementsByClassName("slider-fade");

  // var dots = document.getElementsByClassName("dot");

  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  contentIndex++;

  // check for boundary
  if (contentIndex > content.length) {
    contentIndex = 1;
  }

  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }

  content[contentIndex - 1].style.display = "flex";
  ///  dots[contentIndex - 1].className += " active";

  setTimeout(changeContent, 6000);
}

// --- Hamburger Menu --- //
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
if (hamburger != null && navMenu != null) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) => {
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// --- hide navbar --- //
let lastScrollTop;
let navbar = document.getElementById("navbar");
if (navbar != null) {
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.doctype.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-90px";
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
}
