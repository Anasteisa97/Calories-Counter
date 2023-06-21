import React from "react";

const SearchResult = ({ meal, setSearchScreenIsActive }) => {
  return (
    <div
      className="p-3 hover:bg-blue-100 border-b-2 last:border-b-0 cursor-pointer"
      onClick={() => setSearchScreenIsActive(false)}
    >
      <p className="mb-1">{meal.food_name}</p>
      <p className="text-sm text-slate-500">{meal.food_description}</p>
    </div>
  );
};

export default React.memo(SearchResult);
