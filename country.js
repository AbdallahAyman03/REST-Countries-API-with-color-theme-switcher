let name = new URLSearchParams(window.location.search).get("name");
console.log(name);

let main = document.querySelector(".main");
let darkBTN = document.querySelector(".dark-mode-button");
let darkMode = false;
fetch(
  `https://restcountries.com/v3.1/${
    String(name).length > 3 ? `name/${name}` : `alpha/${name}`
  }`
)
  .then((response) => response.json())
  .then((data) => {
    let country = data[0];
    console.log(country);
    let countryCard = document.createElement("div");
    countryCard.classList.add("country");
    countryCard.setAttribute("id", `${country.name.common}`);
    countryCard.innerHTML = `
      <div class="flag" >
        <img src="${country.flags.png}" alt="${country.name.common}-flag" id="${
      country.name.common
    }-flag" class ="img"/>
      </div>
      <div class="country-info" id="${country.name.common}-info">
        <h2>${country.name.common}</h2>
        <div class="country-info-details">
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Subregion:</strong> ${country.subregion}</p>
        <p><strong>Area:</strong> ${country.area} km<sup>2</sup></p>
        <p><strong>Languages:</strong> ${Object.values(country.languages).join(
          ", "
        )}</p>
        <p><strong>Timezones:</strong> ${Object.values(country.timezones).join(
          ", "
        )}</p>
        <p><strong>Currencies:</strong> ${Object.values(
          Object.values(country.currencies)[0]
        ).join(" ")}</p>
        <p><strong>Top Level Domain:</strong> ${Object.values(country.tld).join(
          ", "
        )}</p>
        </div>
        <div class="country-info-borders">
        <p><strong>Border Countries:</strong> 
        ${
          country.borders
            ? country.borders
                .map((border) => {
                  return `<button class="border-button">
            <a href="details.html?name=${border}">${border}</a>
            </button>
            `;
                })
                .join(" ")
            : "No border countries"
        }
      </div>
      </div>
      `;
    main.appendChild(countryCard);
    console.log(country);
  });
darkBTN.addEventListener("click", () => {
  let backBtn = document.querySelector(".back-button");
  let header = document.querySelector("header");
  let headerH1 = document.querySelector(".my-word");
  let countryName = document.querySelector(".country-info h2");
  let bordersBtn = document.querySelectorAll(".border-button");

  if (darkMode) {
    darkMode = false;
    document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
    document.body.style.color = "hsl(200, 15%, 8%)";
    darkBTN.style.backgroundColor = "hsl(0, 0%, 100%)";
    darkBTN.style.color = "hsl(200, 15%, 8%)";
    backBtn.style.backgroundColor = "hsl(0,0%, 100%)";
    backBtn.style.color = "hsl(209, 23%, 22%)";
    header.style.color = "hsl(209, 23%, 22%)";
    header.style.backgroundColor = "hsl(0,0%, 100%)";
    headerH1.style.color = "hsl(209, 23%, 22%)";
    countryName.style.color = "hsl(209, 23%, 22%)";
    bordersBtn.forEach((border) => {
      border.style.backgroundColor = "hsl(0, 0%, 100%)";
      border.style.color = "hsl(209, 23%, 22%)";
    });
  } else {
    darkMode = true;
    document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
    document.body.style.color = "hsl(0, 0%, 100%)";
    darkBTN.style.backgroundColor = "hsl(209, 23%, 22%)";
    darkBTN.style.color = "hsl(0, 0%, 100%)";
    backBtn.style.backgroundColor = "hsl(209, 23%, 22%)";
    backBtn.style.color = "hsl(0, 0%, 100%)";
    header.style.color = "hsl(0, 0%, 100%)";
    header.style.backgroundColor = "hsl(209, 23%, 22%)";
    headerH1.style.color = "hsl(0, 0%, 100%)";
    countryName.style.color = "hsl(0, 0%, 100%)";
    bordersBtn.forEach((border) => {
      border.style.backgroundColor = "hsl(209, 23%, 22%)";
      border.style.color = "hsl(0, 0%, 100%)";
    });
  }
});
