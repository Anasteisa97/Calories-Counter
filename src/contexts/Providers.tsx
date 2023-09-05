import React, { useState } from "react";
import { RightScreenContext, SearchActiveContext } from "./contexts";
import store from "../redux/store";
import { Provider } from "react-redux";

function Providers({ children }) {
  let [isRightScreenVisible, setRightScreenVisible] = useState<boolean>(false);
  let [isSearchActive, setSearchActive] = useState<boolean>(true);
  return (
    <Provider store={store}>
      <RightScreenContext.Provider
        value={{ isRightScreenVisible, setRightScreenVisible }}
      >
        <SearchActiveContext.Provider
          value={{
            isSearchActive,
            setSearchActive,
          }}
        >
          {children}
        </SearchActiveContext.Provider>
      </RightScreenContext.Provider>
    </Provider>
  );
}

export default Providers;
