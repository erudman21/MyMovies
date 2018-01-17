import React from "react";
import { Image, Header, List, Container, Segment } from "semantic-ui-react";
import RenderRatings from "../RenderRatings";
require("./style.css");

const headerStyle = {
  fontSize: "90%"
};

const PrefilledDisplay = ({ movieData }) => {
  const {
    Actors,
    Awards,
    Director,
    Genre,
    Plot,
    Poster,
    Rated,
    Ratings,
    Runtime,
    Title,
    Year
  } = movieData;

  return (
    <Segment attached="top" className="main-segment-prefilled">
      <Image className="movie-image-prefilled" size="small" src={Poster} />
      <Container className="movie-info-container-wrapper">
        <Header style={{ marginBottom: "0" }} textAlign="center" size="huge">
          {Title}
          <Header.Subheader>
            <List divided size="small" horizontal>
              <List.Item>{Rated}</List.Item>
              <List.Item>{Runtime}</List.Item>
              <List.Item>{Genre}</List.Item>
              <List.Item>{Year}</List.Item>
            </List>
          </Header.Subheader>
        </Header>
        <Container className="movie-info-container">
          <List relaxed floated="left" style={{ marginTop: "-1%" }}>
            <List.Item>
              <List.Header style={headerStyle}>Director</List.Header>
              {Director}
            </List.Item>
            <List.Item>
              <List.Header style={headerStyle}>Actors</List.Header>
              {Actors}
            </List.Item>
          </List>
          <List
            relaxed
            floated="right"
            style={{ marginTop: "-1%", textAlign: "right" }}
          >
            <List.Item>
              <List.Header style={headerStyle}>Awards</List.Header>
              {Awards}
            </List.Item>
            <List.Item>
              <List.Header style={headerStyle}>Reviews</List.Header>
              {<RenderRatings ratings={Ratings} />}
            </List.Item>
          </List>
        </Container>
        <Container>
          <Header style={{ fontSize: "90%", marginBottom: "0" }}>Plot</Header>
          <div className="movie-plot-display">{Plot}</div>
        </Container>
      </Container>
    </Segment>
  );
};

export default PrefilledDisplay;
