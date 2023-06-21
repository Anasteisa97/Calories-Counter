import SearchResults from "./SearchResults";
import {fetchSearchResults} from "../../redux/search-reducer";
import {useDispatch} from "react-redux";
import {useState} from "react";

const Search = ({setSearchScreenIsActive}) => {
  const dispatch = useDispatch();
  let [searchString, setSearchString] = useState('');

  const handleInputChange = (e) => {
    setSearchString(e.target.value);
    dispatch(fetchSearchResults(e.target.value));
  }

  return (
    <>
      <input
        placeholder="search"
        type="search"
        className="border-2 mb-6"
        value={searchString}
        onChange={(e) => handleInputChange(e)}
      />
      <SearchResults setSearchScreenIsActive={setSearchScreenIsActive}/>
    </>
  )
}

export default Search;