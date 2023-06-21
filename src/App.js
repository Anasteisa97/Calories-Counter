import { useEffect, useState } from "react";
import "./App.css";
import RightScreen from "./components/Screens/RightScreen";
import MainScreenContainer from "./components/Screens/MainScreenContainer";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import React from "react";
import store from "./redux/redux-store";

function App(props) {
  let [isRightScreenVisible, setRightScreenVisible] = useState(false);

  useEffect(() => {
    props.initializeApp();
  }, []);

  return !props.initialized ? (
    <div>wait</div>
  ) : (
    <div className="flex">
      <MainScreenContainer setRightScreenVisible={setRightScreenVisible} />
      {isRightScreenVisible && (
        <RightScreen setRightScreenVisible={setRightScreenVisible} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

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
