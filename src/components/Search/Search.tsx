import React, { useState, useCallback, useMemo, FC } from "react";
import SearchResults from "./SearchResults";
import { TextField } from "@mui/material";
import { fetchSearchResults, setFetching } from "../../redux/search-reducer";
import _debounce from "lodash/debounce";
import { useAppDispatch } from "../../redux/hooks";

const Search: FC = (props) => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  const sendBackendRequest = useCallback((value: string) => {
    dispatch(fetchSearchResults(value));
  }, []);

  const debouncedSendRequest = useMemo(() => {
    return _debounce(sendBackendRequest, 500);
  }, [sendBackendRequest]);

  const onChange = (e: { target: { value: string } }) => {
    dispatch(setFetching());
    const { value } = e.target;
    setQuery(value);
    debouncedSendRequest(value);
  };

  return (
    <>
      <div className="mb-4">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          type="search"
          value={query}
          onChange={onChange}
        />
      </div>
      <SearchResults query={query} />
    </>
  );
};

export default Search;
