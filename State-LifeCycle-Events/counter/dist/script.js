class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    //binding is necessary to make `this` point to the correct object
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    //increments the count of the state
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 };
    });
  }
  render() {
    //renders a button that displays the state count
    return React.createElement("button", { onClick: this.clickHandler }, this.state.count);
  }}


ReactDOM.render(
React.createElement(Counter, null),
document.getElementById("root"));