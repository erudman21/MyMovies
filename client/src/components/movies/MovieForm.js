import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import MovieField from "./MovieField";
import formFields from "./formFields";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { Button, Container, Divider } from "semantic-ui-react";
import PrefilledDisplay from "./PrefilledDisplay";

class MovieForm extends Component {
  submit(values) {
    const { finalAddMovie, history } = this.props;

    finalAddMovie(values, history);
  }

  renderPersonalFields() {
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
      <Container>
        <PrefilledDisplay />
        <Divider section />
        <form onSubmit={this.props.handleSubmit(this.submit.bind(this))}>
          {this.renderPersonalFields()}
          <Button href="/movies" color="red">
            Cancel
          </Button>
          <Button floated="right" color="blue">
            Add Movie!
          </Button>
        </form>
      </Container>
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

MovieForm = connect(null, actions)(MovieForm);

export default reduxForm({
  validate,
  form: "movieForm"
})(withRouter(MovieForm));
