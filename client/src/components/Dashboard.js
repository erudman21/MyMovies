import React from "react";
import MovieList from "./movies/MovieList";
import { Link } from "react-router-dom";
//import Popup from "react-popup";
//import "react-popup/popup.css";
//require("./Prompt");

//function openSearch() {
//  Popup.plugins().prompt("", "Ex: Forrest Gump");
//}

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
