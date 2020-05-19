function HelloWorld(props) {
  return React.createElement("h1", null, "Value: ", props.numberArray[props.index], " ");
}

ReactDOM.render(
React.createElement(HelloWorld, { index: "3", numberArray: [1, 2, 3, 4, 5] }),
document.getElementById("root"));