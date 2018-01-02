import React, { Component } from "react";
import Popup from "react-popup";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";

class Prompt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue
    };
  }

  _onChange(e) {
    let value = e.target.value;

    this.setState({ value: value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          className="mm-popup__input"
          value={this.state.value}
        />
        <Link to="/movies/new" className="teal btn-flat white-text">
          Review it!
        </Link>
      </div>
    );
  }
}

/** Prompt plugin */
Popup.registerPlugin("prompt", function(defaultValue, placeholder) {
  this.create({
    title: "Add a movie!",
    content: <Prompt placeholder={placeholder} value={defaultValue} />
  });
});

export default reduxForm({
  form: "movieForm"
})(Prompt);
