const AllQuestions = [
{
  question: "What is 4+1x0",
  options: ["0", "4", "42", "5"],
  answer: 1 },

{
  question: "What is 8 x 1 ",
  options: ["5", "6", "7", "8"],
  answer: 3 },

{
  question: "What is 3x3? ",
  options: ["6", "0", "9", "21"],
  answer: 2 },

{
  question: "What is 5+5x0+2x0",
  options: ["2", "25", "0", "5"],
  answer: 3 },

{
  question: "What is 8 x 2 ",
  options: ["16", "0", "25", "8"],
  answer: 0 },

{
  question: "What is 2+5",
  options: [
  "7",
  "2727",
  "2",
  "4"],

  answer: 0 },

{
  question: "What is 9x20",
  options: [
  "180",
  "19",
  "1800",
  "2552"],

  answer: 0 },
{
  question: "What is 4x5x5/2",
  options: [
  "50",
  "25",
  "124",
  "34"],

  answer: 0 },
{
  question: "What is 90 / 6",
  options: [
  "25",
  "15",
  "45",
  "5"],

  answer: 0 },
{
  question: "1x1",
  options: [
  "1",
  "1",
  "one",
  "uno"],

  answer: 1 },


{
  question: "What is 9000 / 1500",
  options: [
  "400",
  "500",
  "120",
  "6"],

  answer: 3 }];



function Options(props) {
  return (
    React.createElement("div", { className: "options-section" },
    React.createElement("button", { className: "btn-large", onClick: () => props.handleClick(0) }, props.options[0]),
    React.createElement("button", { className: "btn-large", onClick: () => props.handleClick(1) }, props.options[1]),
    React.createElement("button", { className: "btn-large", onClick: () => props.handleClick(2) }, props.options[2]),
    React.createElement("button", { className: "btn-large", onClick: () => props.handleClick(3) }, props.options[3])));


}

function Question(props) {
  return (
    React.createElement("div", { className: "question-section" },
    React.createElement("h3", { className: "question-title" }, props.question.question),
    React.createElement(Options, { options: props.question.options, handleClick: props.handleClick })));


}

function Score(props) {
  return (
    React.createElement("div", { className: "score-section" },
    React.createElement("h2", null, "Score"),
    React.createElement("div", { className: "green accent-3 corrects" }, React.createElement("b", null, "Corrects:"), " ", React.createElement("span", null, props.corrects)),
    React.createElement("div", { className: "red darken-1 incorrects" }, React.createElement("b", null, "Incorrects:"), React.createElement("span", null, props.incorrects))));


}

function ResetButton(props) {
  return (
    React.createElement("div", null,
    React.createElement("button", { onClick: () => props.handleReset(), className: "reset-button" }, "Reset")));


}

class Trivia extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeQuestion: 0, corrects: 0, incorrects: 0, hasFinished: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(id) {
    var nextQuestion = this.state.activeQuestion + 1;
    var finished = 0;
    if (nextQuestion === this.props.questions.length) {
      finished = 1;
    }

    if (id === this.props.questions[this.state.activeQuestion].answer) {
      this.setState({
        corrects: this.state.corrects + 1,
        activeQuestion: nextQuestion,
        hasFinished: finished });

    } else {
      this.setState({
        incorrects: this.state.incorrects + 1,
        activeQuestion: nextQuestion,
        hasFinished: finished });

    }
  }

  handleReset() {
    this.setState({
      activeQuestion: 0,
      corrects: 0,
      incorrects: 0,
      hasFinished: 0 });

  }

  render() {
    if (!this.state.hasFinished) {
      return (
        React.createElement("div", null,
        React.createElement(Question, { question: this.props.questions[this.state.activeQuestion], handleClick: this.handleClick }),
        React.createElement(Score, { corrects: this.state.corrects, incorrects: this.state.incorrects })));


    } else {
      return (
        React.createElement("div", { className: "final-score-section" },
        React.createElement("h2", null, "Final Score"),
        React.createElement("p", null, "The trivia has finished! You final score is:"),
        React.createElement(Score, { corrects: this.state.corrects, incorrects: this.state.incorrects }),
        React.createElement(ResetButton, { handleReset: this.handleReset })));


    }
  }}


ReactDOM.render(
React.createElement(Trivia, { questions: AllQuestions }),
document.getElementById("root"));