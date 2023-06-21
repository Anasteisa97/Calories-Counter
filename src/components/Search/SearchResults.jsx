import React from "react";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";

const SearchResults = ({setSearchScreenIsActive}) => {
  const results = useSelector((state) => state.search.results);

  return (
    <div className="rounded-xl shadow-md bg-sky-50 self-stretch max-h-screen overflow-auto">
      {results && results.map((meal) => (
        <SearchResult
          meal={meal}
          key={meal.food_id}
          setSearchScreenIsActive={setSearchScreenIsActive}
        />
      ))}
    </div>
  );
};

export default React.memo(SearchResults);
