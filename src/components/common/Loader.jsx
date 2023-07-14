import {CircularProgress} from "@mui/material";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${ props => {
    switch( props.size ){
      case 'fullscreen':
        return '100vh';
      default:
        return 'auto';
    }
  }};
`

export const Loader = ({size}) => {
  return <LoaderWrapper size={size}>
    <CircularProgress/>
  </LoaderWrapper>
}