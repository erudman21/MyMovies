import React from "react";
import MovieList from "./movies/MovieList";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <MovieList />
    </div>
  );
};

export default Dashboard;
