import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  MovieResults,
  TVResults,
  SearchTerm,
  handleSubmit,
  loading,
  error,
}) => null;

SearchPresenter.propTypes = {
  MovieResults: PropTypes.array,
  TVResults: PropTypes.array,
  SearchTerm: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SearchPresenter;
