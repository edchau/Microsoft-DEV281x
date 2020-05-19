class Counter extends React.Component {
  constructor(props) {
    super(props);
    //initial state set up
    console.log("HI");
    this.state = { message: "initial message" };
  }

  componentDidMount() {
    //updating state
    this.setState((prevState, props) => {
      return { message: prevState.message + '!' };
    });
    this.setState((prevState, props) => {
      return { message: prevState.message + '!' };
    });
    //   //this.state.count is originally 0
    // this.setState({count:42}, () = {
    //     console.log(this.state.count)
    //     //outputs 42
    // })
  }

  render() {
    return React.createElement("div", null, "Message:", this.state.message);
  }}


ReactDOM.render(
React.createElement(Counter, null),
document.getElementById("root"));