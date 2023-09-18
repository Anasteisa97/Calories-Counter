import React, { useEffect } from "react";
import { resetResults } from "../../redux/search-reducer";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import Error from "../common/Error";
import Info from "../common/Info";
import SkeletonSearch from "../common/Skeleton/SkeletonSearch";

const SearchResults = ({ query }) => {
  const { results, error, isFetching } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetResults());
    };
  }, []);

  if (error) {
    return <Error message={error} />;
  }

  if (query) {
    if (isFetching) {
      return <SkeletonSearch />;
    }
    if (results.length === 0) {
      return <Info message="Nothing was found at your request" />;
    }
    return (
      <div className="grid gap-3 self-stretch max-h-screen overflow-auto">
        {Array.isArray(results) ? (
          results.map((meal) => <SearchResult meal={meal} key={meal.food_id} />)
        ) : (
          <SearchResult meal={results} />
        )}
      </div>
    );
  }
};

export default SearchResults;
