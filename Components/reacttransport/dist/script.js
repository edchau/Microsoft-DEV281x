function TransTitle(props) {
  return (
    React.createElement("div", null,
    React.createElement("h2", null, props.title),
    React.createElement("p", null, props.subtitle)));



}

function VehicleOptions(props) {
  return (
    React.createElement("div", null,
    React.createElement("h3", null, props.title),
    props.subtitle,
    React.createElement("input", { type: "checkbox", checked: true }),
    React.createElement("p", null)));


}


function CategoryItem(props) {
  return React.createElement("option", { value: props.value }, props.value);
}

function CategoryList(props) {
  return (
    React.createElement("div", null,
    props.title,
    React.createElement("select", null,
    React.createElement(CategoryItem, { value: props.categories[0] }),
    React.createElement(CategoryItem, { value: props.categories[1] }),
    React.createElement(CategoryItem, { value: props.categories[2] }),
    React.createElement(CategoryItem, { value: props.categories[3] }))));




}
function VehicleHeaders(props) {
  return (
    React.createElement("tr", null,
    React.createElement("th", null, "Year"),
    React.createElement("th", null, "Model"),
    React.createElement("th", null, "Price"),
    React.createElement("th", null, "Buy")));


}

function VehicleRows(props) {
  return (
    React.createElement("tr", null,
    React.createElement("td", null, props.year),
    React.createElement("td", null, props.model),
    React.createElement("td", null, props.price),
    React.createElement("td", null, React.createElement("button", { className: "btn btn-outline-dark" }, "Buy Now"))));




}

function VehicleList(props) {
  return (
    React.createElement("div", null,
    React.createElement("h2", null, props.header),
    React.createElement("table", { className: "table table-striped" },
    React.createElement("tbody", null,
    React.createElement(VehicleHeaders, null),
    props.vehicles.map(vehicle => {
      return (
        React.createElement(VehicleRows, { year: vehicle.year, model: vehicle.model, price: vehicle.price }));


    })))));






}

function TransportationApp(props) {

  return (
    React.createElement("div", { classname: "container-fluid" },
    React.createElement(TransTitle, { title: "Welcome to React Transportation", subtitle: "The best place to buy vehicles online" }),
    React.createElement(VehicleOptions, { title: "Choose Options", subtitle: "New Only" }),
    React.createElement(CategoryList, { title: "Select Type", categories: ["All", "Cars", "Trucks", "Convertibles"] }),
    React.createElement(VehicleList, { header: "Cars", vehicles: [
      { year: 2013, model: "A", price: "$32000" },
      { year: 2011, model: "B", price: "$4400" },
      { year: 2016, model: "C", price: "$15500" }] }),

    React.createElement(VehicleList, { header: "Trucks", vehicles: [
      { year: 2014, model: "D", price: "$18000" },
      { year: 2013, model: "E", price: "$5200" }] }),

    React.createElement(VehicleList, { header: "Convertibles", vehicles: [
      { year: 2009, model: "F", price: "$2000" },
      { year: 2010, model: "G", price: "$6000" },
      { year: 2012, model: "H", price: "$12500" },
      { year: 2017, model: "M", price: "$50000" }] })));


}

ReactDOM.render(
React.createElement(TransportationApp, null),
document.getElementById("root"));