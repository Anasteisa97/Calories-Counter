import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { fetchById } from "../../redux/add-meal-reducer";
import { SearchActiveContext } from "../../contexts/contexts";

const SearchResult = ({ meal: { food_id, food_name, food_description } }) => {
  const dispatch = useDispatch();
  let { setSearchActive } = useContext(SearchActiveContext);

  const handleClick = () => {
    setSearchActive(false);
    dispatch(fetchById(food_id));
  };

  return (
    <div
      className="transition p-3 border-2 hover:border-blue-600 cursor-pointer rounded-xl bg-white"
      onClick={handleClick}
    >
      <p className="mb-1 font-medium">{food_name}</p>
      <p className="text-xs text-slate-500">{food_description}</p>
    </div>
  );
};

export default React.memo(SearchResult);
