let bikes = [];
const BikesPage = createElement("div", null, createElement("h1", null, "Bikes"), createElement("ul", {
  id: "bike-list"
}));
BikesPage.addEventListener('load', () => {
  fetch("/api/bike", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json()).then(data => {
    bikes = data;
    let lis = bikes.map((bike, index) => createElement("li", null, createElement(BikeCard, {
      bike: bike
    })).innerHTML);
    document.getElementById("bike-list").innerHTML = lis.join('');
  }).catch(error => {
    console.error("Error:", error);
  });
});