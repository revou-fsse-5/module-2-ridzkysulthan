// when click menu bar
let menuBtn = document.getElementById("menuBtn");
let menuTab = document.querySelector(".menu");
let x = document.getElementById("x");

menuBtn.addEventListener("click",function(){
  menuTab.classList.toggle("active");
  x.style.display = "inline-flex";
  menuBtn.style.display = "none";
})

// for close menu navigation beyond the content
document.addEventListener("click", function (e) {
  if (!menuBtn.contains(e.target) && !menuTab.contains(e.target)) {
    menuTab.classList.remove("active");
    x.style.display = "none";
    menuBtn.style.display = "inline-flex";
  }
});