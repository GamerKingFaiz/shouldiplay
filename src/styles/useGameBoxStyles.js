import { makeStyles } from "@mui/styles";

const useGameBoxStyles = makeStyles((theme) => ({
  card: {
    margin: 8,
    width: 580,
    height: 175,
    backgroundImage: "none",
    borderRadius: 10,
    display: "flex",
    boxShadow: "none",
    [theme.breakpoints.down("mobileCard")]: {
      margin: 4,
      width: "100%",
      minWidth: "320px",
      height: "150px",
    },
  },
  cardMedia: {
    width: 116,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    "&:last-child": { paddingBottom: 16 },
    [theme.breakpoints.down("mobileCard")]: {
      padding: 8,
      alignItems: "center",
      justifyContent: "space-around",
      "&:last-child": {
        paddingBottom: 8,
      },
    },
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    [theme.breakpoints.down("mobileCard")]: {
      fontSize: 12,
      textAlign: "center",
    },
  },
  skeleton: {
    width: 130,
    height: 70,
    [theme.breakpoints.down("mobileCard")]: {
      width: 80,
      height: 40,
    },
  },
  hoursCollection: {
    width: 268,
    marginLeft: 32,
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("mobileCard")]: {
      width: "100%",
      marginLeft: 0,
      justifyContent: "center",
    },
    [theme.breakpoints.between("mobileCard", "sm")]: {
      width: "auto",
      marginLeft: 8,
      flexBasis: "70%",
    },
  },
}));

export default useGameBoxStyles;
