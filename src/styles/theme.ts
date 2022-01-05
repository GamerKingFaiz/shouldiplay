import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobileCard: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242A43",
      paper: "rgba(255, 255, 255, 0.05)"
    },
    text: {
      primary: "#DCDCFF"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      mobileCard: 480,
      sm: 681,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(",")
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white"
        }
      }
    }
  }
});

export default theme;
