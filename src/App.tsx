import React, { useContext, useEffect, FC } from "react";
import "./App.css";
import RightScreenContainer from "./components/Screens/RightScreen";
import MainScreen from "./components/Screens/MainScreen";
import { initializeApp } from "./redux/app-reducer";
import { RightScreenContext } from "./contexts/contexts";
import { Loader } from "./components/common/Loader";
import { useAppSelector, useAppDispatch } from "./redux/hooks";

const App: FC = () => {
  let isInitialized = useAppSelector((state) => state.app.initialized);
  const dispatch = useAppDispatch();
  let { isRightScreenVisible } = useContext(RightScreenContext);

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  return isInitialized ? (
    <div className="flex">
      <MainScreen />
      {isRightScreenVisible && <RightScreenContainer />}
    </div>
  ) : (
    <Loader $fullscreen />
  );
};

export default App;
