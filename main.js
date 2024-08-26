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
let countryElm;
const loadData = async (region = "All", specialCountry = "") => {
  let length = countries.children.length;
  for (let i = 0; i < length; i++)
    countries.removeChild(countries.firstElementChild);

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        let countryCard = document.createElement("div");
        countryCard.classList.add("country");
        countryCard.setAttribute("id", `${country.name}`);
        countryCard.innerHTML = `
      <div class="flag" >
        <img src="${country.flag}" alt="${country.name}-flag" id="${country.name}-flag" class ="img"/>
      </div>
      <div class="country-info" id="${country.name}-info">
        <h2>${country.name}</h2>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
      </div>
      `;
        if (
          (region === "All" || region === country.region) &&
          (specialCountry === country.name || specialCountry === "")
        ) {
          // if (specialCountry === "")
          //   countries.insertAdjacentHTML("beforeend", countryCard.outerHTML);
          // else
          countries.appendChild(countryCard);
        }
      });
      countryElm = document.querySelectorAll(".country");
      if (darkMode) {
        countryElm.forEach((country) => {
          country.style.backgroundColor = "hsl(210deg 21.82% 21.57%)";
          country.style.color = "#ffffff";
        });
      } else {
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

document.addEventListener("click", function (ele) {
  if (
    ele.target.className === `country` ||
    ele.target.className === `img` ||
    ele.target.className === `country-info`
  ) {
    let countryName = ele.target.getAttribute("id").split("-")[0];

    setTimeout(function () {
      window.open("/REST-Countries-API-with-color-theme-switcher/details.html");
      loadDetails(countryName);
    }, 500);
  }
});
let main = document.querySelector(`.main`);
const loadDetails = async (countryName) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        if (country.name === countryName) {
          let details = document.createElement("div");
          details.classList.add("details");
          details.innerHTML = `
          <div class="flage-container">
            <img class="flage" src="${country.flag}">
        </div>
        <div class="info">
            <h1>${country.name}</h1>
            <br>
            <div class="two-containers">
                <div>
                    <p>
                        <span class="category">Native Name</span>: ${country.nativename}<br>
                        <span class="category">Population</span>: ${country.population}<br>
                        <span class="category">Region</span>: ${country.region}<br>
                        <span class="category">Sub Region</span>: ${country.subregion}<br>
                        <span class="category">Capital</span>: ${country.capital}<br>
                    </p>
                </div>
                <div>
                    <p>
                        <span class="category">Top Level Domain</span>: ${country.topLevelDomain}<br>
                        <span class="category">Currencies</span>: ${country.currencies.name}<br>
                        <span class="category">Languages</span>: ${country.languages[0].name}<br>
                    </p>
                </div>
            </div>
            <div>
                <p><span class="category">Border Countries</span>:</p>
            </div>
        </div>
    </div>
          `;
          main.appendChild(details);
        }
      });
    });
};
