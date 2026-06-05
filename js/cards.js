const cardsData = [
  { name: "Stella Island Resort & Spa - voksenhotel", price: 20000, location: "Analipsi, Kreta, Grækenland", url: "https://www.sunweb.dk/rejser/graekenland/kreta/analipsi/stella-island-resort-spa-voksenhotel", imgId: "1"},
  { name: "Adaaran Club Rannalhi", price: 40000, location: "South Male Atollen, Maldivernem Syd Asien", url: "https://www.tui.dk/dk/bestil-rejse?productCode=P-000319557&tab=overview&noOfAdults=2&noOfChildren=0&childrenAge=&duration=7&flexibleDays=7&airports%5B%5D=CPH&flexibility=true&noOfSeniors=0&when=10-01-2027&pkg=1126920462/3/739/7&tra_o=Ac4ec21c760b554a715ced2acd8f63886&tra_i=Ac4ec21c760b554a715ced2acd8f63886&units%5B%5D=G-000065:COUNTRY&packageId=P-000319557MVMV002017994528000001799539200000LH82518001440000001800144000000LH4313DD011126920462/3/739/7&index=3&multiSelect=true&brandType=M&bb=AI&room=&isVilla=false&searchType=search&durationCode=7114&rmpc=1%7C2%7C0%7C0%7C0%7C&rmtp=DD01&rmbb=AI&fc=n&greatDealDiscount=0&bb=AI&price=pp", imgId:"2" },
  { name: "Komandoo Island Resort & Spa", price: 45000, location: "Lhaviyani Atoll, Komandoo, Syd Asien", url: "https://www.spies.dk/maldiverne/komandoo-maldives-island-resort?HotelId=18061&ItemId=18061&QueryDepID=12678&QueryResID=14968&QueryDepDate=20270115&QueryRetDate=20270122&QueryChkInDate=20270115&QueryChkOutDate=20270122&QueryDur=-1&QueryRoomAges=|42,42&QueryUnits=1&QueryAges={Ages}&QueryType=IndependentPackage&ActionName=-&BestPrice=false&FastestFlight=false&qf=flowDynamic&CabinClass=Economy&SessionId=onyidyavuuwbrwcrltqrcjlj", imgId: "3" },
  { name: "Riu Palace Santa Maria", price: 26000, location: "Santa Maria, Sal, , Afrika", url: "https://www.tui.dk/dk/bestil-rejse?productCode=P-500008765&tab=overview&noOfAdults=2&noOfChildren=0&childrenAge=&duration=7&flexibleDays=7&airports%5B%5D=CPH&flexibility=true&noOfSeniors=0&when=06-01-2027&pkg=1140587199/3/735/7&tra_o=8049937935/7951505&tra_i=8049938139/7951506&units%5B%5D=&packageId=P-500008765CVSL002817991936000001799193600000DK44417997984000001799798400000DK445TW011140587199/3/735/7&index=19&multiSelect=true&brandType=M&bb=AI&room=&isVilla=false&searchType=search&durationCode=7114&rmpc=1%7C2%7C0%7C0%7C0%7C&rmtp=TW01&rmbb=AI&fc=n&greatDealDiscount=0&bb=AI&price=pp", imgId: "4" },
  { name: "The Ravenala Attitude", price: 26500, location: "Grand Baie, Mauritius, Øst Afrika", url: "https://www.tui.dk/dk/bestil-rejse?productCode=P-000075820&tab=overview&noOfAdults=2&noOfChildren=0&childrenAge=&duration=7&flexibleDays=7&airports%5B%5D=CPH&flexibility=true&noOfSeniors=0&when=13-01-2027&pkg=1126921836/3/742/7&tra_o=Ae1414955f3fb6bc5b5ac7d3081c7fb01&tra_i=Ae1414955f3fb6bc5b5ac7d3081c7fb01&units%5B%5D=G-000000489:COUNTRY&packageId=P-000075820MUMU003117997120000001799798400000LH82918004032000001800403200000OS62SJ011126921836/3/742/7&index=5&multiSelect=true&brandType=M&bb=AI&room=&isVilla=false&searchType=search&durationCode=7114&rmpc=1%7C2%7C0%7C0%7C0%7C&rmtp=SJ01&rmbb=AI&fc=n&greatDealDiscount=0&bb=AI&price=pp#https://www.tui.dk/dk/bestil-rejse?productCode=P-000075820&tab=overview&noOfAdults=2&noOfChildren=0&childrenAge=&duration=7&flexibleDays=7&airports%5B%5D=CPH&flexibility=true&noOfSeniors=0&when=13-01-2027&pkg=1126921836/3/742/7&tra_o=Ae1414955f3fb6bc5b5ac7d3081c7fb01&tra_i=Ae1414955f3fb6bc5b5ac7d3081c7fb01&units%5B%5D=G-000000489:COUNTRY&packageId=P-000075820MUMU003117997120000001799798400000LH82918004032000001800403200000OS62SJ011126921836/3/742/7&index=5&multiSelect=true&brandType=M&bb=AI&room=&isVilla=false&searchType=search&durationCode=7114&rmpc=1%7C2%7C0%7C0%7C0%7C&rmtp=SJ01&rmbb=AI&fc=n&greatDealDiscount=0&bb=AI&price=pp", imgId: "5" },
  { name: "Zilwa Attitude", price: 30000, location: "Grand Baie, Mauritius, Øst Afrika", url: "https://www.tui.dk/dk/bestil-rejse?productCode=P-000075820&tab=overview&noOfAdults=2&noOfChildren=0&childrenAge=&duration=7&flexibleDays=7&airports%5B%5D=CPH&flexibility=true&noOfSeniors=0&when=13-01-2027&pkg=1126921836/3/742/7&tra_o=Ae1414955f3fb6bc5b5ac7d3081c7fb01&tra_i=Ae1414955f3fb6bc5b5ac7d3081c7fb01&units%5B%5D=G-000000489:COUNTRY&packageId=P-000075820MUMU003117997120000001799798400000LH82918004032000001800403200000OS62SJ011126921836/3/742/7&index=5&multiSelect=true&brandType=M&bb=AI&room=&isVilla=false&searchType=search&durationCode=7114&rmpc=1%7C2%7C0%7C0%7C0%7C&rmtp=SJ01&rmbb=AI&fc=n&greatDealDiscount=0&bb=AI&price=pp#https://www.tui.dk/dk/bestil-rejse?productCode=P-000075820&tab=overview&noOfAdults=2&noOfChildren=0&childrenAge=&duration=7&flexibleDays=7&airports%5B%5D=CPH&flexibility=true&noOfSeniors=0&when=13-01-2027&pkg=1126921836/3/742/7&tra_o=Ae1414955f3fb6bc5b5ac7d3081c7fb01&tra_i=Ae1414955f3fb6bc5b5ac7d3081c7fb01&units%5B%5D=G-000000489:COUNTRY&packageId=P-000075820MUMU003117997120000001799798400000LH82918004032000001800403200000OS62SJ011126921836/3/742/7&index=5&multiSelect=true&brandType=M&bb=AI&room=&isVilla=false&searchType=search&durationCode=7114&rmpc=1%7C2%7C0%7C0%7C0%7C&rmtp=SJ01&rmbb=AI&fc=n&greatDealDiscount=0&bb=AI&price=pp", imgId: "6" },
  { name: "Renaissance Honolulu Hotel & Spa", price: 42000, location: "Honolulu, USA", url: "https://booking.lastminute.com/s/tsx/12876498?pageType=hotelDetail&businessProfileId=HOLIDAYSBOOKINGDK&seed=a56590e4&source=csw&searchId=t177239430446569fc&bfSubSource=S07HPV10S07RR01&destination=147688&dateFrom=2027-01-23&dateTo=2027-01-30&origin=CPH&searchMode=DP&sort=recommended&adults=2&vcSearchId=818610436&rating=excellent&hotel_stars=5&departureIntervals=20270123-20270130&extReferenceId=t177239430446569fc&extReferenceType=TSX&clickId=oss_t177239459000669fct17&click_on_card=true", imgId: "7" },
  { name: "Gold Suites", price: 34000, location: "Imerovigli, Santorini, Grækenland", url: "https://www.spies.dk/graekenland/santorini/imerovigli/gold-suites?QueryDepID=12678&QueryResID=83351&QueryDepDate=20260603&QueryRetDate=20260610&QueryRoomAges=|42,42&QueryUnits=0&QueryDur=-1&QueryType=IndependentPackage&HotelId=83665&ItemId=83665&BestPrice=false&AccBookKey=87184fd3-3964-4aa6-a738-6b5915fbcecc&SessionId=0mgr4sneglykqg0ixjadubuu&qf=flowDynamic&price=33590", imgId: "8" },

];

const carousel = document.querySelector(".cards-carousel");
const leftArrow = document.querySelector(".carousel-arrow.left");
const rightArrow = document.querySelector(".carousel-arrow.right");



// Generate cards
function displayCards(data) {
  carousel.innerHTML = ""; // clear previous cards
  data.forEach((card, i) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");

    // Placeholder image

    cardEl.innerHTML = `
      <img src="img/${card.imgId}.png" alt="${card.name}" class="card-img">
      <h3>${card.name}</h3>
      <p class="price">Pris idé: ${card.price.toLocaleString("da-DK")} DKK</p>
      <p class="location">${card.location}</p>
    `;

    // Klik på hele kortet åbner url
    cardEl.addEventListener("click", () => {
      window.open(card.url, "_blank"); // åbner i ny fane
      // alternativ: location.href = card.url; // åbner i samme fane
    });



    carousel.appendChild(cardEl);
  });
}

displayCards(cardsData);

// Smooth animated scroll function
function scrollCarousel(distance) {
  let start = carousel.scrollLeft;
  let target = start + distance;
  let startTime = null;

  function animateScroll(time) {
    if (!startTime) startTime = time;
    let elapsed = time - startTime;
    let duration = 500; // scroll duration in ms
    let progress = Math.min(elapsed / duration, 1);
    let easeOut = 1 - Math.pow(1 - progress, 3);

    carousel.scrollLeft = start + (target - start) * easeOut;



    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

// Arrow click events
leftArrow.addEventListener("click", () => scrollCarousel(-355));
rightArrow.addEventListener("click", () => scrollCarousel(355));


