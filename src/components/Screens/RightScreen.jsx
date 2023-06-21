import Search from "../Search/Search";
import {useState} from "react";
import AddingMeal from "../AddingMeal/AddingMeal";

const RightScreen = (props) => {
  let [searchScreenIsActive, setSearchScreenIsActive] = useState(true);
  return (
    <div className="shadow-2xl relative grow border-l-4 p-5 flex flex-col h-screen items-center justify-center">
      <button
        onClick={() => props.setRightScreenVisible(false)}
        className="absolute right-4 top-4"
      >x</button>
      {searchScreenIsActive
        ? <Search setSearchScreenIsActive={setSearchScreenIsActive} />
        : <AddingMeal setSearchScreenIsActive={setSearchScreenIsActive}/>}
    </div>
  );
};

export default RightScreen;
