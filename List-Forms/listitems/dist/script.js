function ListItem(props) {
  //don't need to add a key to 
  return React.createElement("li", null, "Product: ", props.product, " | Price: $", props.price, "  ");

}


class ProductList extends React.Component {
  render() {
    var elements = array.map((item, index) => {
      //need to add a key here
      return React.createElement(ListItem, { key: item.id, product: item.product, price: item.price });
    });

    return (
      React.createElement("ol", null,
      elements));



  }}



var array = [
{ id: 100, product: "Apple", price: 3 },
{ id: 101, product: "Banana", price: 1 },
{ id: 102, product: "Carrot", price: 2 },
{ id: 103, product: "Donuts", price: 5 },
{ id: 104, product: "Eggplant", price: 4 }];


ReactDOM.render(
React.createElement(ProductList, { productArray: array }),
document.getElementById('root'));