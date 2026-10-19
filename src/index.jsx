import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryParamProvider } from "use-query-params";
import App from "./App";
import history from "./utils/history";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242A43",
      paper: "rgba(255, 255, 255, 0.05)",
    },
    text: {
      primary: "#DCDCFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      mobileCard: 480,
      sm: 681,
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
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryParamProvider history={history}>
        <CssBaseline />
        <App />
      </QueryParamProvider>
    </ThemeProvider>
  </StrictMode>
);
