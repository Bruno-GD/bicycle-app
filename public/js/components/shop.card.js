const ShopCard = ({
  shop
}) => {
  return createElement("div", {
    class: "card"
  }, createElement("div", {
    class: "card-body"
  }, createElement("h5", {
    class: "card-title"
  }, shop.name), createElement("h6", {
    class: "card-subtitle"
  }, shop.address), createElement("p", {
    class: "card-text"
  }, shop.description)));
};