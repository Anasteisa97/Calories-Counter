import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SearchResult from "./SearchResult";
import {resetResults} from "../../redux/search-reducer";
import Error from "../common/Error/Error";

const SearchResults = (props) => {
  const dispatch = useDispatch();
  const { results, error } = useSelector((state) => state.search);

  useEffect(() => {
    return () => {
      dispatch(resetResults());
    }
  }, [])

  if (error) {
    return <Error message={error}/>
  }

  return (
    <div className="rounded-xl shadow-md bg-sky-50 self-stretch max-h-screen overflow-auto">
      {results && Array.isArray(results) ? (
        results.map((meal) => (
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
      )}
    </div>
  );
};

export default React.memo(SearchResults);
