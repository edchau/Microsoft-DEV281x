class Welcome extends React.Component {
  render() {
    return React.createElement("h1", null, "Message: ", this.props.message);
  }}


//renders <h1>Hello World!</h1>
ReactDOM.render(
React.createElement(Welcome, { message: "Hello World!" }),
document.getElementById("root"));