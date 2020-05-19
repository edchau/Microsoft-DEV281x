const FormLabel = props => {
  const style = {
    display: "block" };


  return React.createElement("label", { style: style }, " ", props.label, " ");
};

FormLabel.propTypes = {
  label: PropTypes.string.isRequired };


const FormInput = props => {
  const style = {
    display: "block",
    width: 200,
    padding: "3px 0" };


  return React.createElement("input", { style: style,
    type: "text",
    value: props.value,
    name: props.name,
    onChange: props.handleChange });

};

FormInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired };


const SelectOptions = props => {
  const style = {
    width: 200,
    padding: "3px 0" };


  const mapOptions = props.options.map((option, index) => {
    return React.createElement("option", { key: index, value: option }, " ", option, " ");
  });
  return React.createElement("select", { style: style,
    value: props.value,
    name: "activity",
    onChange: props.handleChange },

  mapOptions);

};

SelectOptions.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired };


const FormCheckBoxes = props => {
  const mapCheckBoxes = props.mapBoxes.map((boxes, index) => {
    return React.createElement("div", { key: index },
    React.createElement("input", {
      type: "checkbox",
      id: boxes.id,
      onChange: props.handleBoxChange,
      checked: boxes.checked }),

    React.createElement("label", { key: true }, " ", boxes.boxLabel, " "));

  });
  return React.createElement("div", null, " ", mapCheckBoxes, " ");
};

FormCheckBoxes.propTypes = {
  mapBoxes: PropTypes.array.isRequired,
  handleBoxChange: PropTypes.func.isRequired };


const Table = props => {
  return (
    React.createElement("table", null,
    React.createElement("thead", null,
    React.createElement("tr", null,
    React.createElement("th", null, " Remove "),
    React.createElement("th", null, "First Name"),
    React.createElement("th", null, "Last Name"),
    React.createElement("th", null, "Activity"),
    React.createElement("th", null, "Restrictions"))),


    React.createElement("tbody", null,

    props.listDetails.map((detail, index) => {
      return React.createElement("tr", null,
      React.createElement("td", null, " ", React.createElement("button", { onClick: () => props.handleRemove(index) }, " x ")),
      React.createElement("td", null, " ", detail.firstName, " "),
      React.createElement("td", null, " ", detail.lastName, " "),
      React.createElement("td", null, " ", detail.activity, " "),
      React.createElement("td", null,
      detail.restrictions.a ? "a" : "",
      detail.restrictions.b ? "b" : "",
      detail.restrictions.c ? "c" : ""));


    }))));




};

Table.propTypes = {
  listDetails: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired };


class FormDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      activity: "Painting",
      restrictions: { a: false, b: false, c: false },
      listItems: [] };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.removeItems = this.removeItems.bind(this);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    //console.log(event.target.value)
  }
  handleCheckBox(event) {
    const copyRestrictions = { ...this.state.restrictions };
    copyRestrictions[event.target.id] = event.target.checked;
    this.setState({ restrictions: copyRestrictions });
    //console.log(event.target.checked);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const listItemsCopy = this.state.listItems.slice();
    listItemsCopy.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      activity: this.state.activity,
      restrictions: this.state.restrictions });

    this.setState({
      firstName: "",
      lastName: "",
      activity: "Painting",
      restrictions: { a: false, b: false, c: false },
      listItems: listItemsCopy });

  }
  removeItems(index) {
    const listItemsCopy = [...this.state.listItems];
    listItemsCopy.splice(index, 1);
    this.setState({ listItems: listItemsCopy });
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("form", { onSubmit: this.handleFormSubmit },
      React.createElement(FormLabel, { label: "First Name" }),
      React.createElement(FormInput, { value: this.state.firstName, name: "firstName", handleChange: this.handleInputChange }),
      React.createElement(FormLabel, { label: "Last Name" }),
      React.createElement(FormInput, { value: this.state.lastName, name: "lastName", handleChange: this.handleInputChange }),
      React.createElement(FormLabel, { label: "Select Activity" }),
      React.createElement(SelectOptions, { options: ["Science Lab", "Swimming", "Cooking", "Painting"],
        value: this.state.activity,
        handleChange: this.handleInputChange }),

      React.createElement(FormCheckBoxes, { mapBoxes: [
        { id: "a", boxLabel: "a) Dietary Restrictions", checked: this.state.restrictions.a },
        { id: "b", boxLabel: "b) Physical Disabilities", checked: this.state.restrictions.b },
        { id: "c", boxLabel: "c) Medical Needs", checked: this.state.restrictions.c }],

        handleBoxChange: this.handleCheckBox }),

      React.createElement("button", { style: { display: "block", width: 200, padding: "5px 0" } }, " Submit ")),

      React.createElement(Table, { listDetails: this.state.listItems, handleRemove: this.removeItems })));


  }}


ReactDOM.render(React.createElement(FormDetails, null), document.getElementById('root'));