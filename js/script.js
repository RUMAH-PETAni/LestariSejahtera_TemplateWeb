// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
  if (!dn.contains(e.target) && !donasiCart.contains(e.target)) {
    donasiCart.classList.remove("active");
  }
});

// klik tombol close modal
// document.querySelector(".modal .close-icon").onclick = (e) => {
//   itemDetailModal.style.display = "none";
//   e.preventDefault();
// };

// klik di luar modal
// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = "none";
//   }
// };

//sembunyikan navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scrollTop").style.bottom = "-6rem";
  } else {
    document.getElementById("scrollTop").style.bottom = "3rem";
  }
  prevScrollpos = currentScrollPos;
};

//scroll ke atas
function scrollToTop() {
  window.scrollTo(0, 0);
}
