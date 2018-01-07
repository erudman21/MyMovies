import React, { Component } from "react";
import { Image, Header, List, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import _ from "lodash";

class PrefilledDisplay extends Component {
  render() {
    const {
      values: { Poster, Title, Rated, Runtime, Genre, Year, Director, Plot }
    } = this.props;
    return (
      <Grid centered columns={2} style={{ marginBottom: "1%" }}>
        <Grid.Column style={{ padding: ".5%" }}>
          <Image
            style={{ float: "right", marginRight: "0" }}
            size="small"
            src={Poster}
          />
        </Grid.Column>
        <Grid.Column
          style={{ padding: ".5%" }}
          textAlign="left"
          verticalAlign="middle"
        >
          <Header size="huge">{Title}</Header>
          <List size="small" style={{ marginTop: "1%" }}>
            <List.Item>
              <List
                divided
                size="small"
                horizontal
                style={{ margin: "0", padding: "0" }}
              >
                <List.Item>{Rated}</List.Item>
                <List.Item>{Runtime}</List.Item>
                <List.Item>{Genre}</List.Item>
                <List.Item>{Year}</List.Item>
              </List>
            </List.Item>
            <List.Item>{Director}</List.Item>
            <List.Item>
              <List
                divided
                size="tiny"
                horizontal
                style={{ margin: "0", padding: "0" }}
              >
                {this.renderRatings()}
              </List>
            </List.Item>
            <List.Item>{Plot}</List.Item>
          </List>
        </Grid.Column>
      </Grid>
    );
  }

  renderRatings() {
    const { values: { Ratings } } = this.props;

    return _.map(Ratings, ({ Source, Value }) => {
      const source = Source === "Internet Movie Database" ? "IMDb" : Source;
      return (
        <List.Item key={source}>
          <List.Content style={{ textAlign: "center" }}>
            {source} <br />
            {Value}
          </List.Content>
        </List.Item>
      );
    });
  }
}

function mapStateToProps(state) {
  return { values: state.loadMovieData };
}

export default connect(mapStateToProps, actions)(PrefilledDisplay);
