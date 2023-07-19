import React, {useEffect} from "react";
import {fetchSearchResults, resetResults} from "../../redux/search-reducer";
import SearchResult from "./SearchResult";
import {useDispatch, useSelector} from "react-redux";
import Error from "../common/Error";

const SearchResults = ({query}) => {
  const {results, error} = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchResults(query));
    return () => {
      dispatch(resetResults())
    }
  }, [query])

  if (error) {
    return <Error message={error}/>
  }

  return (
    <div className="rounded-xl shadow-md bg-sky-50 self-stretch max-h-screen overflow-auto">
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

export default React.memo(SearchResults);
