import React from "react";
import MovieList from "./movies/MovieList";
import Header from "./Header";
import { Container } from "semantic-ui-react";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Container style={{ padding: "0 3%" }}>
        <MovieList />
      </Container>
    </div>
  );
};

export default Dashboard;
