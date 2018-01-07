import React from "react";
import { Image, Header, List, Grid } from "semantic-ui-react";
import _ from "lodash";

const PrefilledDisplay = ({
  Poster,
  Title,
  Rated,
  Runtime,
  Genre,
  Year,
  Director,
  Plot,
  Ratings
}) => {
  const renderRatings = _.map(Ratings, ({ Source, Value }) => {
    const source = Source === "Internet Movie Database" ? "IMDb" : Source;
    return (
      <List.Item key={source}>
        <List.Content style={{ textAlign: "center" }}>
          {source}
          <br />
          {Value}
        </List.Content>
      </List.Item>
    );
  });

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
        <List size="small" style={{ marginTop: "1%", fontWeight: "bold" }}>
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
              {renderRatings}
            </List>
          </List.Item>
          <List.Item>{Plot}</List.Item>
        </List>
      </Grid.Column>
    </Grid>
  );
};

export default PrefilledDisplay;
