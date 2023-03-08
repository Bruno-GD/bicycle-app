const BikeCard = ({
  bike
}) => {
  return createElement("div", {
    class: "card"
  }, createElement("div", {
    class: "card-body"
  }, createElement("h5", {
    class: "card-title"
  }, bike.name), createElement("h6", {
    class: "card-subtitle"
  }, bike.description)));
};