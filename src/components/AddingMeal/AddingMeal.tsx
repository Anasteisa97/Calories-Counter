import React, { ChangeEvent, FC } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import {getIndexMealParam} from "../../utils/getMealParam";
import {CountInput, IngestionSelect, MeasurementSelect} from "./FormElements";
import CaloriesIcon from "../../assets/icons/calories.png"

type AddingMealProps = {
  serving: any;
  food_name: string;
  backToSearch: () => void;
  setNumberOfUnits: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeServing: (i: number) => void;
  selectedIngestionType: string;
  setSelectedIngestionType: (e: any) => void;
  handleSubmit: (e: any) => void;
};

const AddingMeal: FC<AddingMealProps> = ({
  serving,
  food_name,
  backToSearch,
  setNumberOfUnits,
  handleChangeServing,
  selectedIngestionType,
  setSelectedIngestionType,
  handleSubmit,
}) => {
  if (serving) {
    const mealIndex = serving.totalNumberOfUnits / serving.number_of_units;
    return (
      <>
        <button className="absolute top-4 left-4" onClick={backToSearch}>
          <ArrowBackIcon />
        </button>
        <h2 className="mb-6 text-3xl font-medium text-center	">
          {food_name}
        </h2>

        <form
          className="flex flex-col items-center justify-center gap-5"
          onSubmit={handleSubmit}
        >
          <CountInput
            value={serving.totalNumberOfUnits}
            onChange={setNumberOfUnits}
          />

          <MeasurementSelect
            value={serving.measurement_description}
            handleChangeItem={handleChangeServing}
          />

          <IngestionSelect
            value={selectedIngestionType}
            onChange={setSelectedIngestionType}
          />

          <div className="text-2xl mt-6 flex gap-1">
            <span>{getIndexMealParam(serving.calories, mealIndex)}</span>
            <img src={CaloriesIcon} alt="" className="w-8 h-8"/>
          </div>

          <div className="flex flex-col items-center">
            <span>
              Fat:{" "}
              {getIndexMealParam(serving.fat, mealIndex)}
              g | Carbs:{" "}
              {getIndexMealParam(serving.carbohydrate, mealIndex)}
              g | Protein:{" "}
              {getIndexMealParam(serving.protein, mealIndex)}
              g{" "}
            </span>
          </div>

          <button
            type="submit"
            className="transition mt-6 px-6 py-3 bg-lime-500 hover:bg-lime-600 rounded-xl shadow-lg text-white text-xl"
          >
            <AddIcon /> ADD
          </button>
        </form>
      </>
    );
  }
};

export default AddingMeal;
