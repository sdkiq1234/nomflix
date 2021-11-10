import { tvApi } from "api.js";
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
  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: polular },
      } = await tvApi.polular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      this.setState({
        topRated,
        polular,
        airingToday,
      });
    } catch {
      this.setState({ error: "Can't find TV information" });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { topRated, polular, airingToday, error, loading } = this.state;
    console.log(this.state);
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
