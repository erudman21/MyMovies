import React, { Component } from "react";
import Popup from "react-popup";
import { Link } from "react-router-dom";

class Prompt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue
    };

    this.onChange = e => this._onChange(e);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.onChange(this.state.value);
    }
  }

  _onChange(e) {
    let value = e.target.value;

    this.setState({ value: value });
  }

  render() {
    let path = "api/movies/confirm/" + this.state.value;
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          className="mm-popup__input"
          value={this.state.value}
          onChange={this.onChange}
        />
        <Link to={path} className="teal btn-flat white-text">
          Find it!
        </Link>
      </div>
    );
  }
}

/** Prompt plugin */
Popup.registerPlugin("prompt", function(defaultValue, placeholder, callback) {
  let promptValue = null;
  let promptChange = function(value) {
    promptValue = value;
  };

  this.create({
    title: "Movie Search",
    content: (
      <Prompt
        onChange={promptChange}
        placeholder={placeholder}
        value={defaultValue}
      />
    )
  });
});

export default Prompt;
