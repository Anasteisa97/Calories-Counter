import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {FormElement} from "./Controls/FormElement";

const AddingMeal = ({ serving, food_name, backToSearch, setNumberOfUnits, handleChangeServing, servings, selectedIngestionType, setSelectedIngestionType, handleBtnAddClick, ingestionTypes }) => {
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

        <FormElement>
          <TextField
            className="w-32" type="number"
            value={serving.totalNumberOfUnits}
            InputProps={{inputProps: {min: 0}}}
            onChange={(e) => setNumberOfUnits(e.target.value)}
          />
        </FormElement>

        <FormElement>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Measurement</InputLabel>
            <Select value={serving.measurement_description}
                    labelId="demo-simple-select-label" label="Measurement">
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
        </FormElement>

        <FormElement>
          <select
            name="ingestion"
            value={selectedIngestionType}
            onChange={(e) => setSelectedIngestionType(e.target.value)}
          >
            {ingestionTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </FormElement>

        <div className="text-xl mt-6">
          {(serving.calories * serving.totalNumberOfUnits) / serving.number_of_units} cal
        </div>

        <button
          className="text-lg mt-6 px-6 py-3 bg-sky-100 rounded-xl shadow-lg"
          onClick={() => handleBtnAddClick()}
        >
          <AddIcon/> ADD
        </button>
      </>
    );
  }
};

export default AddingMeal;
