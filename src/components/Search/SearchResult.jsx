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
      className="p-3 hover:bg-slate-200 cursor-pointer"
      onClick={handleClick}
    >
      <p className="mb-1 text-blue-600 font-medium">{food_name}</p>
      <p className="text-sm text-slate-500">{food_description}</p>
    </div>
  );
};

export default React.memo(SearchResult);
