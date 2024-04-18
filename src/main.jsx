import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { Card } from "./components/Card";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Estilos personalizados
import "./assets/css/index.css";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./components/Navbar";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1c2769",
    },
    secondary: {
      main: "#f50057",
    },
    success: {
      main: "#156019",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Navbar />
      <App />
      <Card />
      <Cards />
    </ThemeProvider>
  </React.StrictMode>
);
