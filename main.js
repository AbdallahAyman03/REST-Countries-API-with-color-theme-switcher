let body = document.body;
let header = document.querySelector(".header-container");
let darkBtn = document.getElementById(`theme-switcher`);
let h1 = document.querySelector(".header-container h1");
let search = document.querySelector("#search");
let searchBtn = document.querySelector("#search-button");
let searchBar = document.querySelector(".search-bar");
let filter = document.querySelector("#region");
let countries = document.querySelector("#countries");
let specialCountry;
let darkMode = false;
let countryElm, countryInfoH2, countryInfoP, countryInfoSpan;
const loadData = async (region = "All", specialCountry = "") => {
  countries.innerHTML = "";

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        let countryCard = document.createElement("a");
        countryCard.classList.add("country");
        countryCard.href = `details.html?name=${country.name.common}`;
        countryCard.setAttribute("id", `${country.name.common}`);
        countryCard.innerHTML = `
      <div class="flag" >
        <img src="${country.flags.png}" alt="${country.name.common}-flag" id="${country.name.common}-flag" class ="img"/>
      <div class="country-info" id="${country.name.common}-info">
        <h2>${country.name.common}</h2>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
      </div>
      `;
        if (
          (region === "All" || region === country.region) &&
          (specialCountry === "" ||
            String(country.name.common)
              .toLowerCase()
              .includes(specialCountry.toLowerCase()))
        ) {
          countries.appendChild(countryCard);
        }
      });
      countryElm = document.querySelectorAll(".country");
      countryInfo = document.querySelectorAll(".country-info");
      countryInfoH2 = document.querySelectorAll(".country-info h2");
      countryInfoP = document.querySelectorAll(".country-info p");
      countryInfoSpan = document.querySelectorAll(".country-info span");
      if (darkMode) {
        countryInfoH2.forEach((country) => {
          country.style.color = "hsl(0, 0%, 100%)";
        });
        countryInfoP.forEach((country) => {
          country.style.color = "hsl(0, 0%, 95%)";
        });
        countryInfoSpan.forEach((country) => {
          country.style.color = "hsl(0, 0%, 98%)";
        });
        countryElm.forEach((country) => {
          country.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
          country.style.color = "#ffffff";
        });
      } else {
        countryInfoH2.forEach((country) => {
          country.style.color = "hsl(0, 0%, 17%)";
        });
        countryInfoP.forEach((country) => {
          country.style.color = "hsl(0, 0%, 17%)";
        });
        countryInfoSpan.forEach((country) => {
          country.style.color = "hsl(0, 0%, 17%)";
        });
        countryElm.forEach((country) => {
          country.style.backgroundColor = "#ffffff";
          country.style.color = "hsl(0, 0%, 17%)";
        });
      }
    });
};

loadData("All");
filter.addEventListener("change", function () {
  countries.innerHTML = "";
  loadData(this.value);
});

let changeTheme = function () {
  countryElm = document.querySelectorAll(".country");
  if (darkMode) {
    darkMode = false;
    this.style.backgroundColor = "#ffffff";
    this.style.color = "hsl(210deg 21.82% 21.57%)";
    body.style.backgroundColor = "#ffffff";
    header.style.backgroundColor = "#ffffff";
    h1.style.color = "hsl(0, 0%, 17%)";
    search.style.backgroundColor = "#ffffff";
    search.style.color = "hsl(0, 0%, 17%)";
    searchBtn.style.color = "hsl(0, 0%, 17%)";
    searchBtn.style.backgroundColor = "#ffffff";
    searchBar.style.backgroundColor = "#ffffff";
    filter.style.backgroundColor = "#ffffff";
    filter.style.color = "hsl(0, 0%, 17%)";

    countryInfoH2.forEach((country) => {
      country.style.color = "hsl(0, 0%, 17%)";
    });
    countryInfoP.forEach((country) => {
      country.style.color = "hsl(0, 0%, 17%)";
    });
    countryInfoSpan.forEach((country) => {
      country.style.color = "hsl(0, 0%, 17%)";
    });
    countryElm.forEach((country) => {
      country.style.backgroundColor = "#ffffff";
      country.style.color = "hsl(0, 0%, 17%)";
    });
  } else {
    darkMode = true;
    //   this.textContent = "Light Mode";
    this.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
    this.style.color = "#ffffff";
    //   this.setAttribute("id", "light-switcher");
    body.style.backgroundColor = "hsl(204.55deg 25.58% 16.86%)";
    header.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
    h1.style.color = "#ffffff";
    search.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
    search.style.color = "hsl(0deg 0% 70%)";
    searchBtn.style.color = "hsl(0deg 0% 70%)";
    searchBtn.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
    searchBar.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
    filter.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
    filter.style.color = "hsl(0deg 0% 70%)";

    countryInfoH2.forEach((country) => {
      country.style.color = "hsl(0, 0%, 100%)";
    });
    countryInfoP.forEach((country) => {
      country.style.color = "hsl(0, 0%, 95%)";
    });
    countryInfoSpan.forEach((country) => {
      country.style.color = "hsl(0, 0%, 98%)";
    });
    countryElm.forEach((country) => {
      country.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
      country.style.color = "#ffffff";
    });
  }
};
darkBtn.addEventListener("click", changeTheme);

searchBtn.onclick = function () {
  specialCountry = search.value;
  loadData(region.value, specialCountry);
};
