import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Container, Divider } from "semantic-ui-react";
import * as actions from "../../actions";
import PrefilledDisplay from "./PrefilledDisplay";
import PersonalFields from "./PersonalFields";
import moment from "moment";

class MovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateSeen: moment(),
      personalRating: 0,
      personalComments: ""
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.onCommentsChange = this.onCommentsChange.bind(this);
  }

  onDateChange = date => this.setState({ dateSeen: date });
  onRatingChange = rating => this.setState({ personalRating: rating });
  onCommentsChange = (e, { value }) =>
    this.setState({ personalComments: value });

  submit(values) {
    const { finalAddMovie, history } = this.props;

    finalAddMovie(values, history);
  }

  renderPersonalFields() {
    const { dateSeen, personalRating, personalComments } = this.state;
    return (
      <PersonalFields
        dateSeen={dateSeen}
        onDateChange={this.onDateChange}
        personalRating={personalRating}
        onRatingChange={this.onRatingChange}
        personalComments={personalComments}
        onCommentsChange={this.onCommentsChange}
      />
    );
  }

  render() {
    return (
      <Container>
        <PrefilledDisplay />
        <Divider section />
        <form onSubmit={this.props.handleSubmit(this.submit)}>
          {this.renderPersonalFields()}
          <Button href="/movies" color="red">
            Cancel
          </Button>
          <Button floated="right" color="blue">
            Add Movie!
          </Button>
        </form>
      </Container>
    );
  }
}

MovieForm = connect(null, actions)(MovieForm);

export default reduxForm({
  form: "movieForm"
})(withRouter(MovieForm));
