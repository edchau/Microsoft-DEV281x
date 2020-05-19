var num = 0;

function updateNum() {

  ReactDOM.render(
  React.createElement("div", null, num++),
  document.getElementById("root"));

}

setInterval(updateNum, 100);