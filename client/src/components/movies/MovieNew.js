import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import MovieField from "./MovieField";
import { Link, withRouter } from "react-router-dom";
//import validateMovie from "../../utils/validateMovie";
import formFields from "./formFields";
import * as actions from "../../actions";

class MovieNew extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={MovieField}
          label={label}
          name={name}
          type={type}
        />
      );
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <form>
          {this.renderFields()}
          <Link to="/movies" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text">
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
})(MovieNew);
