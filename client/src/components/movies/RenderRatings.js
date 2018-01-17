import React from "react";
import _ from "lodash";
import { List } from "semantic-ui-react";

// Format the official ratings for a movie into a horizontal list
// and shorten imdb
const RenderRatings = ({ ratings }) => {
  const ratingsList = _.map(ratings, ({ Source, Value }) => {
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
    <List divided size="tiny" horizontal style={{ margin: "0", padding: "0" }}>
      {ratingsList}
    </List>
  );
};

export default RenderRatings;
