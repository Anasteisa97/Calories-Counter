import {TextField} from "@mui/material";
import React from "react";

const CountInput = ({value, onChange}) => {
  return (
    <TextField
      className="w-32"
      type="number"
      value={value}
      InputProps={{ inputProps: { min: 0 } }}
      onChange={onChange}
    />
  )
}

export default CountInput