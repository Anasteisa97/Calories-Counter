import { connect } from "react-redux";
import MainScreen from "./MainScreen";

const MainScreenContainer = (props) => {
  const totalCalories = props.meals.reduce(
    (acc, curVal) => acc + curVal.calories * curVal.number_of_units,
    0
  );
  return <MainScreen totalCalories={totalCalories} {...props} />;
};

let mapStateToProps = (state) => ({
  ingestionTypes: state.meals.ingestionTypes,
  meals: state.meals.mealsMain,
});

export default connect(mapStateToProps, null)(MainScreenContainer);
