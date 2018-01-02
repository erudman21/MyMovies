import React from "react";
import MovieList from "./movies/MovieList";
import Popup from "react-popup";
import "react-popup/popup.css";
require("./Prompt");

function openSearch() {
  Popup.plugins().prompt("", "Ex: Forrest Gump");
}

const Dashboard = () => {
  return (
    <div>
      <MovieList />
      <Popup escToClose={true} />
      <div className="fixed-action-btn">
        <a onClick={openSearch} className="btn-floating btn-large cyan">
          <i className="material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
