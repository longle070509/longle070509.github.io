//FIXED THE NAV WHEN SCROLLING
window.onscroll = function () {
  myFunction();
};

// Get the header
let header = document.querySelector(".nav-bar-container");

// Get the offset position of the navbar
let sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    console.log(sticky);
    header.classList.remove("sticky");
  }
}

//OPEN THE NAV
let barIcon = document.querySelector(".bar-icon");
if (barIcon.style.display !== "none") {
  let navRight = document.querySelector(".nav-bar__right");
  barIcon.onclick = () => {
    if (navRight.style.display === "block") {
      navRight.style.display = "none";
    } else {
      navRight.style.display = "block";
    }
  };
}
let subNavHover = document.querySelector(".subnav-hover");
let subNav = document.querySelector(".subnav");
subNavHover.onclick = () => {
  if (subNav.classList.contains("openSubNav")) {
    subNav.classList.remove("openSubNav");
    subNav.style.display = "none";
  } else {
    subNav.classList.add("openSubNav");
    subNav.style.display = "block";
  }
};
