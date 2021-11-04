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
  render() {
    const { MovieResults, TVResults, SearchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        MovieResults={MovieResults}
        TVResults={TVResults}
        SearchTerm={SearchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}

export default SearchContainer;
