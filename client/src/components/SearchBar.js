import _ from "lodash";
import axios from "axios";
import React, { Component } from "react";
import { Search, Button } from "semantic-ui-react";

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
    e.preventDefault();
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value, results: [] });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      try {
        // CORS request to omdb with whatever is currently in search bar
        var url = `http://www.omdbapi.com/?apikey=aa390b01&s=${value}`;
        axios.get(url).then(({ data }) => {
          if (data.Search) {
            this.setState({
              results: _.map(
                data.Search,
                ({ Poster, Title, Year, imdbID }) => ({
                  key: imdbID,
                  title: Title,
                  image: Poster,
                  description: Year
                })
              )
            });
          }
        });
      } catch (e) {
        console.log(e);
      }

      this.setState({
        isLoading: false
      });
    }, 500);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        icon={
          <Button
            style={{ borderRadius: "0 4px 4px 0" }}
            as="a"
            href="/movies/new"
            inverted
          >
            Search
          </Button>
        }
        input={{
          style: { borderRadius: "0px" },
          fluid: true,
          placeholder: "Add a movie..."
        }}
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}

export default SearchBar;
