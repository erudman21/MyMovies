import React from "react";
import DatePicker from "react-datepicker";
import { Input, Form, TextArea } from "semantic-ui-react";
import ReactStars from "react-stars";
import "react-datepicker/dist/react-datepicker.css";

const PersonalFields = ({
  dateSeen,
  onDateChange,
  personalRating,
  onRatingChange,
  personalComments,
  onCommentsChange
}) => {
  return (
    <Form>
      <Form.Field>
        <label>Date Seen:</label>
        <DatePicker
          customInput={<Input icon="calendar" placeholder="Date" />}
          selected={dateSeen}
          onChange={onDateChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Rating:</label>
        <ReactStars
          count={10}
          value={personalRating}
          onChange={onRatingChange}
          size={24}
          color2={"#ffd700"}
        />
      </Form.Field>
      <Form.Field>
        <label>Personal Thoughts:</label>
        <TextArea
          placeholder="Add your thoughts on this movie..."
          value={personalComments}
          onChange={onCommentsChange}
        />
      </Form.Field>
    </Form>
  );
};

export default PersonalFields;
