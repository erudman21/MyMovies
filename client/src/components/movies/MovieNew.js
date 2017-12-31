import React, { Component } from "react";
import { reduxForm } from "redux-form";
import MovieForm from "./MovieForm";

class MovieNew extends Component {
  render() {
    return (
      <div>
        <MovieForm />
      </div>
    );
  }
}

export default reduxForm({
  form: "movieForm"
})(MovieNew);
