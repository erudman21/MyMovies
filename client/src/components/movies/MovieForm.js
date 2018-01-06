import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import MovieField from "./MovieField";
import formFields from "./formFields";
import _ from "lodash";
import { Link, withRouter } from "react-router-dom";
import * as actions from "../../actions";
import { connect } from "react-redux";

class MovieForm extends Component {
  submit(values) {
    const { finalAddMovie, history } = this.props;

    finalAddMovie(values, history);
  }

  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={MovieField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.submit.bind(this))}>
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

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, valueError }) => {
    if (!values[name]) {
      errors[name] = valueError;
    }
  });

  return errors;
}

function mapStateToProps(state) {
  return { initialValues: state.form.movieForm.values };
}

MovieForm = connect(mapStateToProps, actions)(MovieForm);

export default reduxForm({
  validate,
  form: "movieForm"
})(withRouter(MovieForm));
