import IngestionList from "../Ingestion/IngestionList";

const MainScreen = ({ totalCalories, ...props }) => {
  return (
    <div className="grow p-5 flex items-center justify-center flex-col h-screen">
      <div className="grid grid-cols-2 gap-5">
        <IngestionList
          ingestionTypes={props.ingestionTypes}
          meals={props.meals}
        />
      </div>
      <div className="text-4xl mt-6">{totalCalories}</div>
    </div>
  );
};

export default MainScreen;
