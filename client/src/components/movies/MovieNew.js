import React, { Component } from "react";
import MovieForm from "./MovieForm";
import SiteHeader from "../SiteHeader";

class MovieNew extends Component {
  render() {
    return (
      <div>
        <SiteHeader />
        <MovieForm />
      </div>
    );
  }
}

export default MovieNew;
