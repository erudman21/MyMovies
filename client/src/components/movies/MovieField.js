import React from "react";
import MovieDate from "./MovieDate";
import Rating from "react-rating";

export default ({ input, label, meta: { touched, error } }) => {
  // the default input field
  let inputField = <input {...input} style={{ marginBottom: "5px" }} />;

  // show the date picker for this field
  if (input.name === "dateSeen") {
    inputField = <MovieDate style={{ marginBottom: "5px" }} />;
  }

  if (input.name === "personalRating") {
    inputField = (
      <Rating
        stop={10}
        empty={<i className="material-icons">star_border</i>}
        full={<i className="material-icons">star</i>}
      />
    );
  }

  return (
    <div>
      <label>{label}</label>
      <br />
      {inputField}
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
