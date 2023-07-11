import React, {useContext} from "react";
import { useDispatch } from "react-redux";
import { fetchById } from "../../redux/add-meal-reducer";
import { SearchActiveContext } from "../../Contexts/contexts";

const SearchResult = ({ meal }) => {
  const dispatch = useDispatch();
  let {setSearchScreenIsActive} = useContext(SearchActiveContext);

  const handleClick = () => {
    setSearchScreenIsActive(false);
    dispatch(fetchById(meal.food_id));
  };

  return (
    <div
      className="p-3 hover:bg-blue-100 border-b-2 last:border-b-0 cursor-pointer"
      onClick={() => handleClick()}
    >
      <p className="mb-1">{meal.food_name}</p>
      <p className="text-sm text-slate-500">{meal.food_description}</p>
    </div>
  );
};

export default React.memo(SearchResult);
