import React from "react";
import DatePicker from "react-datepicker";

export default ({ input, label, meta: { touched, error } }) => {
  if (label !== "When did you watch it?") {
    return (
      <div>
        <label>{label}</label>
        <input {...input} style={{ marginBottom: "5px" }} />
        <div className="red-text" style={{ marginBottom: "20px" }}>
          {touched && error}
        </div>
      </div>
    );
  }

  return (
    <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
  );
};
