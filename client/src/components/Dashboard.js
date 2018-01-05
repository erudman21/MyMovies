import React from "react";
import MovieList from "./movies/MovieList";
import { Container } from "semantic-ui-react";

const Dashboard = () => {
  return (
    <Container style={{ padding: "0 3%" }}>
      <MovieList />
    </Container>
  );
};

export default Dashboard;
