import React, { ChangeEvent, FC } from "react";
import { TextField } from "@mui/material"

type CountInputProps = {
	value: any,
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CountInput:FC<CountInputProps> = ({value, onChange}) => {
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