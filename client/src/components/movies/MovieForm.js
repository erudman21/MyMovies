import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import MovieField from "./MovieField";
import { Link } from "react-router-dom";
//import validateMovie from "../../utils/validateMovie";
import formFields from "./formFields";

class MovieForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={MovieField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
        />
        {this.renderFields()}
        <button type="submit" className="teal btn-flat right white-text">
          Done
          <i className="material-icons right">done</i>
        </button>
      </div>
    );
  }
}

export default reduxForm({
  form: "movieForm"
})(MovieForm);
