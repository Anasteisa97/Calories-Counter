import { useEffect, useState } from "react";
import "./App.css";
import RightScreen from "./components/Screens/RightScreen";
import MainScreenContainer from "./components/Screens/MainScreenContainer";
import { Provider, useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import React from "react";
import store from "./redux/redux-store";

function App(props) {
  let [isRightScreenVisible, setRightScreenVisible] = useState(false);
  let isInitialized = useSelector((state) => state.app.initialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  return isInitialized ? (
    <div className="flex">
      <MainScreenContainer setRightScreenVisible={setRightScreenVisible} />
      {isRightScreenVisible && (
        <RightScreen setRightScreenVisible={setRightScreenVisible} />
      )}
    </div>
  ) : (
    <div>wait</div>
  );
}

const CaloriesCounterApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

export default CaloriesCounterApp;
