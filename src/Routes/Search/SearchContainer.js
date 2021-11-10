import { movieApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
  state = {
    MovieResults: null,
    TVResults: null,
    SearchTerm: "",
    error: null,
    loading: false,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const { MovieResults, TVResults, SearchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        MovieResults={MovieResults}
        TVResults={TVResults}
        SearchTerm={SearchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SearchContainer;
