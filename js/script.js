let prevScrollPos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").classList.remove("hidden");
  } else {
    document.getElementById("header").classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
}