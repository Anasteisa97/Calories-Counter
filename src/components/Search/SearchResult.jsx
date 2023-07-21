import React, {useContext} from "react";
import { useDispatch } from "react-redux";
import { fetchById } from "../../redux/add-meal-reducer";
import { SearchActiveContext } from "../../Contexts/contexts";

const SearchResult = ({ meal }) => {
  const dispatch = useDispatch();
  let {setSearchScreenActive} = useContext(SearchActiveContext);

  const handleClick = () => {
    setSearchScreenActive(false);
    dispatch(fetchById(meal.food_id));
  };

  return (
    <div
      className="p-3 hover:bg-blue-100 cursor-pointer"
      onClick={() => handleClick()}
    >
      <p className="mb-1 text-blue-600 font-medium">{meal.food_name}</p>
      <p className="text-sm text-slate-500">{meal.food_description}</p>
    </div>
  );
};

export default React.memo(SearchResult);
