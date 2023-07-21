import React, {useEffect} from "react";
import {resetResults} from "../../redux/search-reducer";
import SearchResult from "./SearchResult";
import {useDispatch, useSelector} from "react-redux";
import Error from "../common/Error";
import Info from "../common/Info";

const SearchResults = ({query}) => {
  const {results, error, isFetching} = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetResults())
    }
  }, [])

  if (error) {
    return <Error message={error}/>
  }

  if (!isFetching) {
    if ((query !== '') && results.length === 0 ) {
      return <Info message="Nothing was found at your request"/>
    }
  }

  return (
    <div className="rounded-xl bg-slate-50 shadow-xl self-stretch max-h-screen overflow-auto">
      {results && (
        Array.isArray(results)
        ? (results.map((meal) => (
            <SearchResult
              meal={meal}
              key={meal.food_id}
            />
          ))
        ) : (
          <SearchResult
            meal={results}
            key={results.food_id}
          />
        )
      )}
    </div>
  );
};

export default SearchResults;
