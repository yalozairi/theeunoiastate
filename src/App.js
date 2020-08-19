import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  const theme = {
    black: "black",
    yellow: "#bdac2d",
    darkBlue: "#11586A",
    lightBlue: "#82B3B7",
    white: "#FFFFFF",
    beige: "#EAE0CC",
    pink: "#C9ADA1",
    green: "#A0A083",
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
