import React, { Component } from "react";
import Popup from "react-popup";
import { Link } from "react-router-dom";
import axios from "axios";
import Autocomplete from "react-autocomplete";
import _ from "lodash";

class Prompt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      searchResults: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, searchResults: [] });
    console.log(event.target.value);

    try {
      var url = `http://www.omdbapi.com/?apikey=aa390b01&s=${this.state.value}`;
      axios.get(url).then(({ data }) => {
        if (data.Search) {
          _.map(data.Search, ({ Poster, Title, Year }) => {
            this.setState({
              searchResults: [...this.state.searchResults, Title]
            });
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Search for a movie:</label>
        <Autocomplete
          inputProps={{ placeholder: "Ex: Forrest Gump", padding: "2px" }}
          getItemValue={item => item}
          items={this.state.searchResults}
          renderItem={(item, isHighlighted) => (
            <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
              {item}
            </div>
          )}
          menuStyle={{
            padding: "2px 2px",
            position: "fixed",
            zIndex: 999
          }}
          open={this.state.searchResults.length !== 0}
          value={this.state.value}
          onChange={this.handleChange}
          onSelect={value => this.setState({ value })}
        />
        <Link to="/movies/new" className="teal btn-flat white-text">
          Find it!
        </Link>
      </form>
    );
  }
}

Popup.registerPlugin("prompt", function(placeholder) {
  this.create({
    title: "Add a movie!",
    content: <Prompt />
  });
});

export default Prompt;
