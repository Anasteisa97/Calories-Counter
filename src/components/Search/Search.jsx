import React, {useState, useDeferredValue, Suspense, lazy} from "react";
import SearchResults from "./SearchResults";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchSearchResults} from "../../redux/search-reducer";

const Search = (props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    dispatch(fetchSearchResults(e.target.value));
  }

  return (
    <>
      <div className="mb-4">
        <TextField
          id="outlined-basic" label="Search" variant="outlined"
          type="search"
          value={query}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <SearchResults />
    </>
  )
}

export default Search;