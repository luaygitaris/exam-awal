const hamburger = document.getElementById("hamburger");
const menuSearch = document.getElementById("search");
const menuList = document.getElementById("list");

hamburger.addEventListener("click", () => {
  menuSearch.classList.toggle("show");
  menuList.classList.toggle("show");
});
