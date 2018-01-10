import React, { Component } from "react";
import MovieForm from "./MovieForm";
import Header from "../Header";
import { Container } from "semantic-ui-react";

class MovieNew extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container style={{ marginTop: "20px" }}>
          <MovieForm />
        </Container>
      </div>
    );
  }
}

export default MovieNew;
