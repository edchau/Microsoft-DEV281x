class Details extends React.Component {
  render() {
    return React.createElement("h1", null, this.props.details);
  }}

class Button extends React.Component {
  render() {
    return (
      React.createElement("button", { style: { color: this.props.active ? 'red' : 'blue' }, onClick: () => {this.props.clickHandler(this.props.id, this.props.name);} },
      this.props.name));


  }}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeArray: [0, 0, 0, 0], details: "" };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(id, details) {
    var arr = [0, 0, 0, 0];
    arr[id] = 1;
    this.setState({ activeArray: arr, details: details });
    console.log(id, details);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement(Button, { id: 0, active: this.state.activeArray[0], clickHandler: this.clickHandler, name: "bob" }),
      React.createElement(Button, { id: 1, active: this.state.activeArray[1], clickHandler: this.clickHandler, name: "joe" }),
      React.createElement(Button, { id: 2, active: this.state.activeArray[2], clickHandler: this.clickHandler, name: "tree" }),
      React.createElement(Button, { id: 3, active: this.state.activeArray[3], clickHandler: this.clickHandler, name: "four" }),
      React.createElement(Details, { details: this.state.details })));




  }}




ReactDOM.render(
React.createElement(App, null),
document.getElementById("root"));