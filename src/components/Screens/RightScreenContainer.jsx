import Search from "../Search/Search";
import {useContext, useState} from "react";
import AddingMealContainer from "../AddingMeal/AddingMealContainer";
import {RightScreenContext, SearchActiveContext} from "../../Contexts/contexts";

const RightScreenContainer = (props) => {
  let {setRightScreenVisible} = useContext(RightScreenContext)
  let [searchScreenIsActive, setSearchScreenIsActive] = useState(true);
  return (
    <SearchActiveContext.Provider value={{searchScreenIsActive, setSearchScreenIsActive}}>
      <RightScreen
        searchIsActive={searchScreenIsActive}
        hideScreen={() => setRightScreenVisible(false)}
      />
    </SearchActiveContext.Provider>
  );
};

const RightScreen = ({searchIsActive, hideScreen}) => {
  return (
    <div className="shadow-2xl relative grow border-l-4 p-5 flex flex-col h-screen items-center justify-center">
      <button
        onClick={() => hideScreen()}
        className="absolute right-4 top-4"
      >x</button>
      {searchIsActive
        ? <Search />
        : <AddingMealContainer />}
    </div>
  )
}

export default RightScreenContainer;
