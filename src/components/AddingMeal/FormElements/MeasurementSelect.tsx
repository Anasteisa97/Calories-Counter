import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {FC} from "react";
import {useAppSelector} from "../../../redux/hooks";

type MeasurementSelectProps = {
  value: string,
  handleChangeItem: (i: number) => void;
}

const MeasurementSelect:FC<MeasurementSelectProps> = ({value, handleChangeItem }) => {
  const servings = useAppSelector((state) => state.addMeal.servings);
  return (
    <FormControl fullWidth>
      <InputLabel id="measurement">Measurement</InputLabel>
      <Select
        value={value}
        labelId="measurement"
        label="Measurement"
      >
        {servings &&
        servings.map((s, i) => (
          <MenuItem
            value={s.measurement_description}
            key={s.measurement_description}
            onClick={() => handleChangeItem(i)}
          >
            {s.measurement_description}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MeasurementSelect