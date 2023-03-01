let shops = [];
const HomePage = createElement("div", null, createElement("div", {
  id: "home-page"
}, createElement("h1", null, "Home"), createElement("ul", {
  id: "shop-list"
}, shops.map((shop, index) => createElement("li", null, createElement(ShopCard, {
  shop: shop
}))))));
window.onload = () => {
  fetch("/api/shop", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json()).then(data => {
    shops = data;
    let lis = shops.map((shop, index) => createElement("li", null, createElement(ShopCard, {
      shop: shop
    })).innerHTML);
    document.getElementById("shop-list").innerHTML = lis.join('');
  }).catch(error => {
    console.error("Error:", error);
  });
};