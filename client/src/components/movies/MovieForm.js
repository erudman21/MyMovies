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
        <Field key={name} component={MovieField} label={label} name={name} />
      );
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <form
          onSubmit={this.props.handleSubmit(value => {
            console.log(value);
          })}
        >
          {this.renderFields()}
          <Link to="/movies" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Add Movie!
            <i className="material-icons right">local_movies</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "movieForm"
})(MovieForm);
