import IngestionList from "../Ingestion/IngestionList";
import {useSelector} from "react-redux";

const MainScreen = (props) => {
  const {ingestionTypes, mealsMain} = useSelector((state => state.meals))
  const totalCalories = mealsMain.reduce(
    (acc, curVal) => acc + ((curVal.totalNumberOfUnits * curVal.calories) / curVal.number_of_units),
    0
  );
  return (
    <div className="grow p-5 flex items-center justify-center flex-col h-screen">
      <div className="grid grid-cols-2 gap-5">
        <IngestionList
          ingestionTypes={ingestionTypes}
          meals={mealsMain}
        />
      </div>
      <div className="text-4xl mt-6">{totalCalories}</div>
    </div>
  )
}

export default MainScreen
