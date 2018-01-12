import _ from "lodash";
import React, { Component } from "react";
import { Search, Label } from "semantic-ui-react";
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

    loadMovieDataFull({ id: key }, history);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value, results: [] });

    if (value.length < 1) return this.resetComponent();

    const { loadMovieDataLight } = this.props;

    loadMovieDataLight({ title: value }).then(() => {
      const { movieData: { Response, Search } } = this.props;

      if (Response === "True") {
        this.setState({
          results: _.map(Search, ({ Poster, Title, Year, imdbID }) => ({
            key: imdbID,
            title: Title,
            image: Poster,
            description: Year
          }))
        });
      }
    });

    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        input={
          <div className="ui input" style={{ margin: "20px" }}>
            <input
              type="text"
              placeholder="Add a movie..."
              style={{ borderRadius: "4px 0 0 4px" }}
            />
            <button
              href="/movies/new"
              className="ui icon button"
              style={{ borderRadius: "0 4px 4px 0" }}
            >
              <i className="search icon" />
            </button>
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
