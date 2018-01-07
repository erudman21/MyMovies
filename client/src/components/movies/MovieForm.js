import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Container, Divider } from "semantic-ui-react";
import * as actions from "../../actions";
import PrefilledDisplay from "./PrefilledDisplay";
import PersonalFields from "./PersonalFields";

class MovieForm extends Component {
  submit(values) {
    const { finalAddMovie, history } = this.props;

    finalAddMovie(values, history);
  }

  renderPersonalFields() {
    return <PersonalFields />;
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

MovieForm = connect(null, actions)(MovieForm);

export default reduxForm({
  form: "movieForm"
})(withRouter(MovieForm));
