function Feature(props) {
  return (
    props.active && React.createElement("h1", null, props.message));

}
ReactDOM.render(
React.createElement(Feature, { active: true, message: "hi" }),
document.getElementById("root"));