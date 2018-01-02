import React from "react";
import MovieList from "./movies/MovieList";
import Popup from "react-popup";
import Prompt from "./Prompt";
import "react-popup/popup.css";

function openSearch() {
  Popup.plugins().prompt("", "Search for a movie", function(value) {
    Popup.alert("You typed: " + value);
  });
}

const Dashboard = () => {
  return (
    <div>
      <MovieList />
      <Popup
        className="mm-popup"
        btnClass="mm-popup__btn"
        closeBtn={true}
        closeHtml={null}
        defaultOk="Ok"
        defaultCancel="Cancel"
        wildClasses={false}
        escToClose={true}
      />
      <div className="fixed-action-btn">
        <a onClick={openSearch} className="btn-floating btn-large cyan">
          <i className="material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
