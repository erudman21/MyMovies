import React, { Component } from "react";
import MovieForm from "./MovieForm";
import { reduxForm } from "redux-form";
import { Container } from "semantic-ui-react";

class MovieNew extends Component {
  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <MovieForm />
      </Container>
    );
  }
}

export default reduxForm({
  form: "movieForm"
})(MovieNew);
