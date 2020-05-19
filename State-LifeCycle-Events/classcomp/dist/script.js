class Welcome extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello World!");
  }}


//renders <h1>Hello World!</h1>
ReactDOM.render(
React.createElement(Welcome, null),
document.getElementById("root"));