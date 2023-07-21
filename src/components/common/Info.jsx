import {Alert} from "@mui/material";

const Info = ({message}) => {
  return <Alert severity="info">{message}</Alert>
}

export default Info;