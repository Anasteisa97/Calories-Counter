import {useState} from "react";
import {RightScreenContext, SearchActiveContext} from "./contexts";
import store from "../redux/store";
import {Provider} from "react-redux";

function Providers({ children }) {
  let [isRightScreenVisible, setRightScreenVisible] = useState(false);
  let [searchScreenIsActive, setSearchScreenActive] = useState(true);
  return (
    <Provider store={store}>
      <RightScreenContext.Provider value={{isRightScreenVisible, setRightScreenVisible}}>
        <SearchActiveContext.Provider value={{searchScreenIsActive, setSearchScreenActive}}>
          {children}
        </SearchActiveContext.Provider>}
      </RightScreenContext.Provider>
    </Provider>
  );
}

export default Providers