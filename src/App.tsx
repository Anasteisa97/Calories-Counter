import React from "react";
import {useContext, useEffect } from "react";
import "./App.css";
import RightScreenContainer from "./components/Screens/RightScreen";
import MainScreen from "./components/Screens/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import {RightScreenContext} from "./Contexts/contexts";
import {Loader} from "./components/common/Loader";
import Providers from "./Contexts/Providers";
import {useAppSelector, useAppDispatch} from "./redux/hooks";

function App() {
  let isInitialized = useAppSelector((state) => state.app.initialized);
  const dispatch = useAppDispatch();
  let {isRightScreenVisible} = useContext(RightScreenContext)

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  return isInitialized ? (
    <div className="flex">
      <MainScreen />
      {isRightScreenVisible && <RightScreenContainer />}
    </div>
  ) : (
    <Loader size='fullscreen'/>
  );
}

const CaloriesCounterApp = () => {
  return (
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>
  );
};

export default CaloriesCounterApp;
