import React from "react";
import MovieDate from "./MovieDate";
import ReactStars from "react-stars";

const ratingChanged = newRating => {
  console.log(newRating);
};

export default ({ input, label, meta: { touched, error } }) => {
  // the default input field
  var inputField = <input {...input} style={{ marginBottom: "5px" }} />;

  // show the date picker for this field
  if (input.name === "dateSeen") {
    inputField = <MovieDate {...input} />;
  }

  if (input.name === "personalRating") {
    inputField = (
      <ReactStars
        count={10}
        onChange={ratingChanged}
        size={24}
        color={"#ffd700"}
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
