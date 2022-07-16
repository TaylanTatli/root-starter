/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Taylan";

const CARDS = [
  {
    name: "Trakt",
    icon: "fa-tv",
    link: "https://trakt.tv/",
  },
  {
    name: "Reddit",
    icon: "fa-reddit",
    link: "https://www.troddit.com/r/unixporn/new",
  },
  {
    name: "lobste.rs",
    icon: "fa-shrimp",
    link: "https://lobste.rs/",
  },
  {
    name: "HackerNews",
    icon: "fa-y",
    link: "https://news.ycombinator.com/news",
  },
  {
    name: "Lemmy",
    icon: "fa-frog",
    link: "https://lemmy.ml/",
  },
  {
    name: "ProductHunt",
    icon: "fa-p",
    link: "https://www.producthunt.com/",
  },
  {
    name: "Github",
    icon: "fa-github",
    link: "https://github.com/",
  },
  {
    name: "Dizilla",
    icon: "fa-clapperboard",
    link: "https://dizilla5.com/",
  },
  {
    name: "Pocket",
    icon: "fa-get-pocket",
    link: "https://app.getpocket.com/",
  },
  {
    name: "Resmi Gazete",
    icon: "fa-newspaper",
    link: "https://resmigazete.gov.tr/",
  },
  {
    name: "Netlify",
    icon: "fa-diamond",
    link: "https://app.netlify.com/",
  },
  {
    name: "Google Drive",
    icon: "fa-google-drive",
    link: "https://drive.google.com/drive/",
  },
  {
    name: "Blog",
    icon: "fa-blog",
    link: "https://taylantatli.com/",
  },
  {
    name: "Books",
    icon: "fa-book",
    link: "https://books.taylantatli.com/",
  },
  {
    name: "Notes",
    icon: "fa-note-sticky",
    link: "https://notes.taylantatli.com/",
  },
  {
    name: "1000Kitap",
    icon: "fa-book-atlas",
    link: "https://1000kitap.com/",
  },
  {
    name: "Adobe Docs",
    icon: "fa-folder",
    link: "https://documentcloud.adobe.com/",
  },
  {
    name: "Dev.to",
    icon: "fa-dev",
    link: "https://dev.to/",
  },
  {
    name: "Gitlab",
    icon: "fa-gitlab",
    link: "https://gitlab.com/",
  },
  {
    name: "Youtube",
    icon: "fa-youtube",
    link: "https://www.youtube.com/",
  },
  {
    name: "ÖSYM",
    icon: "fa-school",
    link: "https://ais.osym.gov.tr/",
  },
  {
    name: "KAA",
    icon: "fa-crown",
    link: "https://www2.kickassanime.rs/",
  },
  {
    name: "UserStyles",
    icon: "fa-vest",
    link: "https://33kk.github.io/uso-archive/?search=reddit&sort=updated",
  },
  {
    name: "Quickref",
    icon: "fa-asterisk",
    link: "https://quickref.me/",
  },
  {
    name: "Mdigi Tools",
    icon: "fa-screwdriver-wrench",
    link: "https://mdigi.tools/",
  },
  {
    name: "Tagpacker",
    icon: "fa-tags",
    link: "https://tagpacker.com/",
  },
  {
    name: "Raindrop",
    icon: "fa-droplet",
    link: "https://app.raindrop.io/my/0",
  },
  {
    name: "fffuel",
    icon: "fa-gas-pump",
    link: "https://fffuel.co",
  },
  {
    name: "Google Translate",
    icon: "fa-language",
    link: "https://translate.google.com/",
  },
  {
    name: "DesignerNews",
    icon: "fa-swatchbook",
    link: "https://www.designernews.co/",
  },
  {
    name: "Fosstodon",
    icon: "fa-mastodon",
    link: "https://fosstodon.org/web/timelines/home",
  },
  {
    name: "Instagram",
    icon: "fa-instagram",
    link: "https://www.instagram.com/",
  }
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

const MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();

  // Update the Time
  currentTime.innerHTML = `${currentHour}:${currentMinute}`;

  // Update the Date
  currentDate.innerHTML = `${currentNumber} ${MONTHS[currentMonth]}, ${DAYS[currentDay]}`;

  // Greeting based on hour
  let greeting = "";

  if (currentHour >= 0 &&currentHour < 6)
    greeting = "İyi Geceler"
  else if (currentHour >= 6 &&currentHour < 12)
    greeting = "Günaydın";
  else if(currentHour == 12)
    greeting = "Tünaydın";
  else if (currentHour >= 12 && currentHour <= 17)
    greeting = "İyi günler";
  else if (currentHour >= 17 && currentHour <= 23)
    greeting = "İyi akşamlar";
  else 
    greeting = "Merhaba";

  greetingText.innerHTML = `${greeting}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 30000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

/********************/
/* WEATHER FUNCTION */
/********************/

const wIcons = {
  "01d": "./icons/01d.svg",
  "01n": "./icons/01n.svg",
  "02d": "./icons/02d.svg",
  "02n": "./icons/02n.svg",
  "03d": "./icons/03d.svg",
  "03n": "./icons/03n.svg",
  "04d": "./icons/04d.svg",
  "04n": "./icons/04n.svg",
  "09d": "./icons/09d.svg",
  "09n": "./icons/09n.svg",
  "10d": "./icons/10d.svg",
  "10n": "./icons/10n.svg",
  "11d": "./icons/11d.svg",
  "11n": "./icons/11n.svg",
  "13d": "./icons/13d.svg",
  "13n": "./icons/13n.svg",
  "50d": "./icons/50d.svg",
  "50n": "./icons/50n.svg",
};

const weather = {};
weather.temperature = {};

var tempUnit = 'C';

const KELVIN = 272.15;
const key = 'APIHERE';
const cityID = "320879";
getWeather(cityID);

function getWeather(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?id=${city}&lang=tr&appid=${key}`;
  fetch(api)
    .then(function(response) {
      let data = response.json();
      return data;
    })
    .then(function(data) {
      let celsius = Math.floor(data.main.temp - KELVIN);
      weather.temperature.value = tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32;
      weather.description = data.weather[0].description;
      weather.city = data.name;
      weather.icon = data.weather[0].icon;
    })
    .then(function() {
      displayWeather();
    });
}

function displayWeather() {
  weatherCity.innerHTML = weather.city;
  weatherTemp.innerHTML = `${weather.temperature.value.toFixed(0)}°<span class="darkfg">${tempUnit}</span>`;
  weatherDesc.innerHTML = weather.description;
  weatherIcon.src = wIcons[weather.icon]
}

/******************/
/* CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon = document.createElement("i");
    currentCardIcon.classList.add(card.icon);

    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

/*****************/
/* RANDOM COLORS */
/*****************/
/* Give random background colors to card */
const randomColors = () => {
  var cards = document.querySelectorAll(".card");
  var names = document.querySelectorAll(".card__name");

  for (i = 0; i < cards.length; i++) {
    // Pick a random color from the array 'colors'.
    cards[i].style.backgroundColor = "hsla(" + ~~(360 * Math.random()) + "," + "70%,"+ "70%,1)";
    names[i].style.color = "black";
  }
}

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();
randomColors();
