import React, { FC } from "react";
import { Alert } from "@mui/material";

type ErrorProps = {
  message: string;
};

const Error: FC<ErrorProps> = ({ message }) => {
  return <Alert severity="error">{message}</Alert>;
};

export default Error;
