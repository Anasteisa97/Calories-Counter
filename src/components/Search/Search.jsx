import React, {useState, useCallback, useMemo} from "react";
import SearchResults from "./SearchResults";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchSearchResults, setFetching} from "../../redux/search-reducer";
import _debounce from 'lodash/debounce';

const Search = (props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const sendBackendRequest = useCallback((value) => {
    dispatch(fetchSearchResults(value));
  }, []);

  const debouncedSendRequest = useMemo(() => {
    return _debounce(sendBackendRequest, 500);
  }, [sendBackendRequest]);

  const onChange = (e) => {
    dispatch(setFetching());
    const value = e.target.value;
    setQuery(value);
    debouncedSendRequest(value);
  }

  return (
    <>
      <div className="mb-4">
        <TextField
          id="outlined-basic" label="Search" variant="outlined"
          type="search"
          value={query}
          onChange={(e) => onChange(e)}
        />
      </div>
      <SearchResults query={query} />
    </>
  )
}

export default Search;