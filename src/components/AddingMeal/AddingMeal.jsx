import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {getTotalMealParam} from "../../utils/getTotalMealParam";

const AddingMeal =
  ({
     serving,
     food_name,
     backToSearch,
     setNumberOfUnits,
     handleChangeServing,
     servings,
     selectedIngestionType,
     setSelectedIngestionType,
     handleSubmit,
     ingestionTypes
   }) => {
    if (serving) {
      return (
        <>
          <button
            className="absolute top-4 left-4"
            onClick={() => backToSearch()}
          >
            <ArrowBackIcon/>
          </button>
          <h2 className="mb-6 text-2xl">{food_name}</h2>

          <form
            className="flex flex-col items-center justify-center gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <TextField
              className="w-32" type="number"
              value={serving.totalNumberOfUnits}
              InputProps={{inputProps: {min: 0}}}
              onChange={(e) => setNumberOfUnits(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel id="measurement">Measurement</InputLabel>
              <Select value={serving.measurement_description}
                      labelId="measurement" label="Measurement">
                {servings && servings.map((s, i) => (
                  <MenuItem
                    value={s.measurement_description} key={s.measurement_description}
                    onClick={() => handleChangeServing(i)}
                  >
                    {s.measurement_description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="ingestion">Ingestion</InputLabel>
              <Select value={selectedIngestionType} labelId="ingestion" label="Ingestion"
                      onChange={(e) => setSelectedIngestionType(e.target.value)}>
                {ingestionTypes.map((type) => (
                  <MenuItem value={type} key={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div className="text-xl mt-6">
              {getTotalMealParam(serving.calories, serving.totalNumberOfUnits, serving.number_of_units)} cal
            </div>

            <div className="flex flex-col items-center">
              <span>
                {getTotalMealParam(serving.protein, serving.totalNumberOfUnits, serving.number_of_units)}{" "}
                / {getTotalMealParam(serving.fat, serving.totalNumberOfUnits, serving.number_of_units)}{" "}
                / {getTotalMealParam(serving.carbohydrate, serving.totalNumberOfUnits, serving.number_of_units)}</span>
              <p>protein / fat / carbohydrate</p>
            </div>

            <button
              type="submit"
              className="text-lg mt-6 px-6 py-3 bg-sky-100 rounded-xl shadow-lg"
            >
              <AddIcon/> ADD
            </button>
          </form>

        </>
      );
    }
  };

export default AddingMeal;
