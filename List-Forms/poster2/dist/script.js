function PostButton(props) {
  var style = {
    width: 24,
    height: 24 };

  return (
    React.createElement("button", { style: style, onClick: () => props.handleClick() }, props.label));

}
function PostText(props) {
  var style = {
    border: "1px solid black",
    width: props.width };

  return (
    React.createElement("div", { style: style }, props.text));

}
function Post(props) {
  var style = {
    display: "flex" };

  return (
    React.createElement("div", { style: style },
    React.createElement(PostButton, { label: "x", handleClick: props.removeItem }),
    React.createElement(PostText, { text: props.title, width: "200" }),
    React.createElement(PostButton, { label: "+", handleClick: props.incrementScore }),
    React.createElement(PostText, { text: props.score, width: "20" }),
    React.createElement(PostButton, { label: "-", handleClick: props.decrementScore })));


}

function PostList(props) {
  return (
    React.createElement("ol", null,

    props.postList.map((item, index) =>
    React.createElement(Post, { key: index,
      title: item.title,
      score: item.score,
      incrementScore: () => props.updateScore(index, 1),
      decrementScore: () => props.updateScore(index, -1),
      removeItem: () => props.removeItem(index) }))));





}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", items: [] };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }
  addItem() {

    var itemsCopy = this.state.items.slice();
    var truncatedString = this.state.value.substring(0, 20);
    itemsCopy.push({ "title": truncatedString, "score": 0 });
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    this.setState({ items: itemsCopy, value: "" });
  }
  removeItem(index) {
    var itemsCopy = this.state.items.slice();
    itemsCopy.splice(index, 1);
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });

    this.setState({ items: itemsCopy });
  }
  updateScore(index, val) {
    var itemsCopy = this.state.items.slice();
    itemsCopy[index].score += val;
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    this.setState({ items: itemsCopy });
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("input", { value: this.state.value, onChange: this.handleChange.bind(this) }),
      React.createElement("button", { onClick: () => this.addItem() }, "Submit"),
      React.createElement(PostList, { postList: this.state.items,
        updateScore: this.updateScore.bind(this),
        removeItem: this.removeItem.bind(this) })));




  }}


ReactDOM.render(
React.createElement(App, null),
document.getElementById("root"));