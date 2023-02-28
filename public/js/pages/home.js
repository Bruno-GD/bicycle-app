let shops = [{
  name: "The Coffee House",
  address: "123 Main St",
  description: "A great place to get coffee"
}, {
  name: "The Tea House",
  address: "456 Main St",
  description: "A great place to get tea"
}];
const HomePage = createElement("div", null, createElement("h1", null, "Home"), createElement("ul", {
  class: ""
}, shops.map((shop, index) => createElement("li", null, createElement(ShopCard, {
  shop: shop
})))));