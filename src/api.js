import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f0558db31aae412648cf101d48d86d44",
    language: "en-US",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
};
export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  polular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airng"),
  showDetail: (id) =>
    api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
  search: (term) => api.get("search/tv", { params: { query: term } }),
};
