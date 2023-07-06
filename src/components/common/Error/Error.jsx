import {Alert} from "@mui/material";

const Error = ({message}) => {
  return <Alert severity="error">{message}</Alert>
}

export default Error;