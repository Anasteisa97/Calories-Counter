import Search from "../Search/Search";
import {useContext, useState} from "react";
import AddingMealContainer from "../AddingMeal/AddingMealContainer";
import {RightScreenContext} from "../../Contexts/contexts";

const RightScreen = (props) => {
  let {setRightScreenVisible} = useContext(RightScreenContext)
  let [searchScreenIsActive, setSearchScreenIsActive] = useState(true);
  return (
    <div className="shadow-2xl relative grow border-l-4 p-5 flex flex-col h-screen items-center justify-center">
      <button
        onClick={() => setRightScreenVisible(false)}
        className="absolute right-4 top-4"
      >x</button>
      {searchScreenIsActive
        ? <Search setSearchScreenIsActive={setSearchScreenIsActive} />
        : <AddingMealContainer setSearchScreenIsActive={setSearchScreenIsActive}/>}
    </div>
  );
};

export default RightScreen;
