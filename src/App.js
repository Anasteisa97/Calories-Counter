import {useEffect, useState} from "react";
import "./App.css";
import RightScreenContainer from "./components/Screens/RightScreen";
import MainScreen from "./components/Screens/MainScreen";
import { Provider, useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import React from "react";
import store from "./redux/redux-store";
import {RightScreenContext} from "./Contexts/contexts";
import {Loader} from "./components/common/Loader";

function AppContainer(props) {
  let [isRightScreenVisible, setRightScreenVisible] = useState(false);
  let isInitialized = useSelector((state) => state.app.initialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  return isInitialized ? (
    <RightScreenContext.Provider value={{setRightScreenVisible}}>
      <App isRightScreenVisible={isRightScreenVisible}/>
    </RightScreenContext.Provider>
  ) : (
    <Loader size='fullscreen'/>
  );
}

const App = ({isRightScreenVisible}) => {
  return (
    <div className="flex">
      <MainScreen />
      {isRightScreenVisible && <RightScreenContainer />}
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
