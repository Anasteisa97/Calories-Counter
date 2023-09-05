import React, { FC } from "react";
import { Alert } from "@mui/material";

type InfoProps = {
  message: string;
};

const Info: FC<InfoProps> = ({ message }) => {
  return <Alert severity="info">{message}</Alert>;
};

export default Info;
