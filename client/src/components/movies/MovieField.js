import React from "react";
import MovieDate from "./MovieDate";

export default ({ input, label, meta: { touched, error } }) => {
  if (label === "When did you watch it?") {
    return <MovieDate />;
  }

  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
