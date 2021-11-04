import React from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends React.Component {
  state = {
    topRated: null,
    polular: null,
    airingToday: null,
    error: null,
    loading: true,
  };
  render() {
    const { topRated, polular, airingToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        polular={polular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TVContainer;
