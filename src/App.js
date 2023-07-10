import {useEffect, useState} from "react";
import "./App.css";
import RightScreen from "./components/Screens/RightScreen";
import MainScreenContainer from "./components/Screens/MainScreenContainer";
import { Provider, useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import React from "react";
import store from "./redux/redux-store";
import {RightScreenContext} from "./Contexts/contexts";

function AppContainer(props) {
  let [isRightScreenVisible, setRightScreenVisible] = useState(false);
  let isInitialized = useSelector((state) => state.app.initialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  return isInitialized ? (
    <RightScreenContext.Provider value={{isRightScreenVisible, setRightScreenVisible}}>
      <App isRightScreenVisible={isRightScreenVisible}/>
    </RightScreenContext.Provider>
  ) : (
    <div>wait</div>
  );
}

const App = ({isRightScreenVisible}) => {
  return (
    <div className="flex">
      <MainScreenContainer />
      {isRightScreenVisible && <RightScreen />}
    </div>
  )
}

const CaloriesCounterApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
};

export default CaloriesCounterApp;
