const hamburger = document.getElementById("hamburger");
const menuSearch = document.getElementById("search");
const menuList = document.getElementById("list");

hamburger.addEventListener("click", () => {
  menuSearch.classList.toggle("show");
  menuList.classList.toggle("show");
});

const filterResult = document.getElementById("filterResult");
const result = document.getElementById("result");

filterResult.addEventListener("click", () => {
  result.classList.toggle("active");
  // console.log("asdasd");
});

document.addEventListener("DOMContentLoaded", () => {
  const user = document.getElementById("user");
  const form = document.getElementById("form");

  user.addEventListener("click", () => {
    form.classList.toggle("active");
    // console.log("asdasd");
  });

  document.addEventListener("click", (e) => {
    const insideUser = user.contains(e.target);
    const insideForm = form.contains(e.target);
    if (!insideUser && !insideForm) {
      form.classList.remove("active");
    }
  });
});

