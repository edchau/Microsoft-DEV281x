var product = { name: "apple", stock: 0 };

if (product.stock < 0) {
  var element = React.createElement("h1", null, "The product named ", product.name, " is not in stock");
} else
{
  var element = React.createElement("h1", null, "The product named ", product.name, " and has ", product.stock, " units in stock");
}

ReactDOM.render(
element,
document.getElementById("root"));