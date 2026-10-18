import { useTheme } from "@mui/material";

const useGameBoxStyles = () => {
  const theme = useTheme();

  return {
    card: {
      margin: "8px",
      width: "580px",
      height: "175px",
      backgroundImage: "none",
      borderRadius: "10px",
      display: "flex",
      boxShadow: "none",
      [theme.breakpoints.down("mobileCard")]: {
        margin: "4px",
        width: "100%",
        minWidth: "320px",
        height: "150px",
      },
    },
    cardMedia: {
      width: "116px",
      [theme.breakpoints.down("sm")]: {
        width: "100px",
      },
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      width: "100%",
      "&:last-child": { paddingBottom: "16px" },
      [theme.breakpoints.down("mobileCard")]: {
        padding: "8px",
        alignItems: "center",
        justifyContent: "space-around",
        "&:last-child": {
          paddingBottom: "8px",
        },
      },
    },
    title: {
      color: "white",
      fontSize: "20px",
      fontWeight: 700,
      [theme.breakpoints.down("mobileCard")]: {
        fontSize: "12px",
        textAlign: "center",
      },
    },
    skeleton: {
      width: "130px",
      height: "70px",
      [theme.breakpoints.down("mobileCard")]: {
        width: "80px",
        height: "40px",
      },
    },
    hoursCollection: {
      width: "268px",
      marginLeft: "32px",
      display: "flex",
      justifyContent: "flex-start",
      [theme.breakpoints.down("mobileCard")]: {
        width: "100%",
        marginLeft: 0,
        justifyContent: "center",
      },
      [theme.breakpoints.between("mobileCard", "sm")]: {
        width: "auto",
        marginLeft: "8px",
        flexBasis: "70%",
      },
    },
  };
};

export default useGameBoxStyles;
