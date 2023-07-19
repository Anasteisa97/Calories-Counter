import React, {useState, useDeferredValue, Suspense, lazy} from "react";
//import SearchResults from "./SearchResults";
import {TextField} from "@mui/material";
const SearchResults = lazy(() => import('./SearchResults'));

const Search = (props) => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
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
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  )
}

export default Search;