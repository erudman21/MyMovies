import _ from "lodash";
import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
require("./search.css");

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result: { key } }) => {
    const { loadMovieDataFull, history } = this.props;

    this.setState({ value: "" });

    // Call action handler for the movie that was selected from dropdown
    loadMovieDataFull({ id: key }, history);
  };

  handleSearchChange = (e, { value }) => {
    // Display loading when user changes their search
    // Resets results so only the most recent ajax results are shown
    this.setState({ isLoading: true, value, results: [] });

    if (value.length < 1) return this.resetComponent();

    const { loadMovieDataLight } = this.props;

    // Action handler that requests movie data from omdb based on whatever
    // is currently in the search bar
    loadMovieDataLight({ title: value }).then(() => {
      const { movieData: { Response, Search } } = this.props;

      if (Response === "True") {
        // Format each movie returned by omdb to be presented in the dropdown
        this.setState({
          results: _.map(Search, ({ Poster, Title, Year, imdbID }) => ({
            key: imdbID,
            title: Title,
            image: Poster,
            description: Year
          }))
        });
      }

      this.setState({ isLoading: false });
    });
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        input={
          <div
            className="ui icon input"
            style={{ margin: "20px", width: "95%" }}
          >
            <input
              type="text"
              placeholder="Add a movie..."
              style={{ borderRadius: "4px" }}
            />
            <i className="search icon" />
          </div>
        }
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
      />
    );
  }
}

function mapStateToProps(state) {
  return { movieData: state.loadMovieDataLight };
}

export default connect(mapStateToProps, actions)(withRouter(SearchBar));
