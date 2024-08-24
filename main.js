let body = document.body;
let header = document.querySelector(".header-container");
let darkBtn = document.getElementById(`theme-switcher`);
let h1 = document.querySelector(".header-container h1");
let search = document.querySelector("#search");
let searchBtn = document.querySelector("#search-button");
let searchBar = document.querySelector(".search-bar");
let filter = document.querySelector("#region");

darkBtn.addEventListener("click", function () {
  //   this.textContent = "Light Mode";
  this.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
  this.style.color = "#ffffff";
  //   this.setAttribute("id", "light-switcher");
  body.style.backgroundColor = "hsl(204.55deg 25.58% 16.86%)";
  header.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
  h1.style.color = "#ffffff";
  search.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
  search.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
  searchBtn.style.color = "hsl(0deg 0% 70%)";
  searchBtn.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
  searchBar.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
  filter.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
  filter.style.color = "hsl(0deg 0% 70%)";
});

// document.addEventListener("click", function (element) {
//   if (element.target.getAttribute("id") === "light-switcher") {
//     this.textContent = "Dark Mode";
//     this.style.backgroundColor = "#ffffff";
//     this.style.color = "#ffffff";
//     this.setAttribute("id", "theme-switcher");
//     body.style.backgroundColor = "#ffffff";
//     header.style.backgroundColor = "#ffffff";
//     h1.style.color = "hsl(0, 0%, 17%)";
//     search.style.backgroundColor = "#ffffff";
//     search.style.backgroundColor = "#ffffff";
//     searchBtn.style.color = "hsl(0, 0%, 17%)";
//     searchBtn.style.backgroundColor = "#ffffff";
//     searchBar.style.backgroundColor = "#ffffff";
//     filter.style.backgroundColor = "#ffffff";
//     filter.style.color = "hsl(0, 0%, 17%)";
//   }
// });
