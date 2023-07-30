import Search from "../Search/Search";
import {useContext} from "react";
import AddingMealContainer from "../AddingMeal/AddingMealContainer";
import {RightScreenContext, SearchActiveContext} from "../../Contexts/contexts";
import CloseIcon from '@mui/icons-material/Close';

const RightScreenContainer = (props) => {
  let {setRightScreenVisible} = useContext(RightScreenContext)
  let {searchScreenIsActive} = useContext(SearchActiveContext)
  return (
    <RightScreen
      isSearchActive={searchScreenIsActive}
      hideScreen={() => setRightScreenVisible(false)}
    />
  );
};

const RightScreen = ({isSearchActive, hideScreen}) => {
  return (
    <div className="shadow-2xl relative w-1/3 border-l-4 p-5 pt-12 flex flex-col h-screen items-center justify-center">
      <button
        onClick={() => hideScreen()}
        className="absolute right-4 top-4"
      >
        <CloseIcon />
      </button>
      {isSearchActive
        ? <Search />
        : <AddingMealContainer />}
    </div>
  )
}

export default RightScreenContainer;
