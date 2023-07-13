import {CircularProgress} from "@mui/material";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.$fullscreen ? "100vh" : "auto"};
`

export const Loader = ({size}) => {
  return (
    size === 'fullscreen'
      ? <LoaderWrapper $fullscreen>
        <CircularProgress/>
      </LoaderWrapper>
      : <LoaderWrapper>
        <CircularProgress/>
      </LoaderWrapper>
  )
}