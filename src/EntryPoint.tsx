import React, { FC } from "react";
import Providers from "./contexts/Providers";
import App from "./App";

const EntryPoint: FC = () => {
  return (
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>
  );
};

export default EntryPoint;
