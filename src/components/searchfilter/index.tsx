import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar";

interface SearchFiltersContProps {
  marginBottom?: boolean;
}

// Add types for the props of 'SearchFilters' and the styled component 'SearchFiltersCont'
type SearchFiltersProps = {
  // genres, ratings, languages, searchMovies
  genres: never[];
  ratings: {
    id: number;
    name: number;
  }[];
  languages: {
    id: string;
    name: string;
  }[];
  searchMovies: (keyword: string, year: number) => void;
};

export default function SearchFilters({
  genres,
  ratings,
  languages,
  searchMovies,
}: SearchFiltersProps) {
  return (
    <FiltersWrapper>
      <SearchFiltersCont marginBottom className="search_inputs_cont">
        {/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        {/* Implement a component called "ExpandableFilters" and use it for the filter categories */}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div<SearchFiltersContProps>`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;
