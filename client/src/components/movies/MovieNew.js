import React, { Component } from "react";
//import validateMovie from "../../utils/validateMovie";
import MovieForm from "./MovieForm";
import { reduxForm } from "redux-form";

class MovieNew extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <MovieForm />
      </div>
    );
  }
}

export default reduxForm({
  form: "movieForm"
})(MovieNew);
