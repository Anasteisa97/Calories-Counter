import SearchResults from "./SearchResults";
import {fetchSearchResults} from "../../redux/search-reducer";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {TextField} from "@mui/material";

const Search = ({setSearchScreenIsActive}) => {
  const dispatch = useDispatch();
  let [searchString, setSearchString] = useState('');

  const handleInputChange = (e) => {
    setSearchString(e.target.value);
    dispatch(fetchSearchResults(e.target.value));
  }

  return (
    <>
      <TextField
        id="outlined-basic" label="Search" variant="outlined"
        type="search"
        value={searchString}
        style={{marginBottom: 24}}
        onChange={(e) => handleInputChange(e)}
      />
      <SearchResults setSearchScreenIsActive={setSearchScreenIsActive}/>
    </>
  )
}

export default Search;