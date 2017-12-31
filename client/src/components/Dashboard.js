import React from "react";
import { Link } from "react-router-dom";
import MovieList from "./movies/MovieList";

const Dashboard = () => {
  return (
    <div>
      <MovieList />
      <div className="fixed-action-btn">
        <Link to="/movies/new" className="btn-floating btn-large cyan">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
