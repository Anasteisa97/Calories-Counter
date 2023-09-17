import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React from "react";
import {useAppSelector} from "../../../redux/hooks";

const IngestionSelect = ({value, onChange}) => {
  const ingestionTypes = useAppSelector((state) => state.meals.ingestionTypes);
  return (
    <FormControl>
      <InputLabel id="ingestion">Ingestion</InputLabel>
      <Select
        value={value}
        labelId="ingestion"
        label="Ingestion"
        onChange={(e: SelectChangeEvent<any>) =>
          onChange(e.target.value)
        }
      >
        {ingestionTypes.map((type) => (
          <MenuItem value={type} key={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default IngestionSelect