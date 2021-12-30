import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 656,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
        }
      }
    }
  }
});

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "Montserrat",
//       "Roboto",
//       "Helvetica",
//       "Arial",
//       "sans-serif",
//     ].join(","),
//   },
//   palette: {
//     type: "dark",
//     primary: {
//       main: "#242A43",
//     },
//     // secondary: {
//     //   main: "#242A43",
//     // },
//     text: {
//       primary: "#ffffff",
//       secondary: "#DCDCFF",
//     },
//     background: {
//       default: "#242A43",
//       paper: "#FFFFFF0D",
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
