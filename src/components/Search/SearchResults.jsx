import React from "react";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";

const SearchResults = ({ setSearchScreenIsActive }) => {
  const results = useSelector((state) => state.search.results);
  const error = useSelector((state) => state.search.error);

  if (error) {
    return <p className="text-red-700">{error}</p>;
  }

  return (
    <div className="rounded-xl shadow-md bg-sky-50 self-stretch max-h-screen overflow-auto">
      {results && Array.isArray(results) ? (
        results.map((meal) => (
          <SearchResult
            meal={meal}
            key={meal.food_id}
            setSearchScreenIsActive={setSearchScreenIsActive}
          />
        ))
      ) : (
        <SearchResult
          meal={results}
          key={results.food_id}
          setSearchScreenIsActive={setSearchScreenIsActive}
        />
      )}
    </div>
  );
};

export default React.memo(SearchResults);
