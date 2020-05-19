function ShoppingTitle(props) {
  return (
    React.createElement("div", null,
    React.createElement("h1", null, props.title),
    React.createElement("h2", null, "Total Number of Items: ", props.numItems)));



}
function ListItem(props) {
  return React.createElement("li", null, props.item);
}

function ShoppingList(props) {
  return (
    React.createElement("div", null,
    React.createElement("h3", null, props.header),
    React.createElement("ol", null,
    React.createElement(ListItem, { item: props.items[0] }),
    React.createElement(ListItem, { item: props.items[1] }),
    React.createElement(ListItem, { item: props.items[2] }))));



}


function ShoppingApp(props) {

  return (
    React.createElement("div", null,
    React.createElement(ShoppingTitle, { title: "My Shopping List", numItems: "9" }),
    React.createElement(ShoppingList, { header: "Food", items: ["Apple", "Bread", "Cheese"] }),
    React.createElement(ShoppingList, { header: "Clothes", items: ["Shirt", "Pants", "Hat"] }),
    React.createElement(ShoppingList, { header: "Supplies", items: ["Pen", "Paper", "Glue"] })));


}

ReactDOM.render(
React.createElement(ShoppingApp, null),
document.getElementById("root"));