import React, { FC } from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

type LoaderProps = {
  $fullscreen: boolean;
};

const LoaderWrapper = styled.div<LoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.$fullscreen ? "100vh" : "auto")};
`;

export const Loader: FC<LoaderProps> = (props) => {
  return (
    <LoaderWrapper {...props}>
      <CircularProgress />
    </LoaderWrapper>
  );
};
