import React from "react";
import { useDispatch } from "react-redux";
import { fetchById } from "../../redux/add-meal-reducer";

const SearchResult = ({ meal, setSearchScreenIsActive }) => {
  const dispatch = useDispatch();

  const handleResultClick = () => {
    setSearchScreenIsActive(false);
    dispatch(fetchById(meal.food_id));
  };

  return (
    <div
      className="p-3 hover:bg-blue-100 border-b-2 last:border-b-0 cursor-pointer"
      onClick={() => handleResultClick()}
    >
      <p className="mb-1">{meal.food_name}</p>
      <p className="text-sm text-slate-500">{meal.food_description}</p>
    </div>
  );
};

export default React.memo(SearchResult);
