import { makeStyles } from "@mui/styles";

const useGameBoxStyles = makeStyles((theme) => ({
  card: {
    margin: 8,
    width: 580,
    height: 175,
    backgroundImage: "none",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      margin: 4,
      width: "300px",
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
    [theme.breakpoints.down("sm")]: {
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
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  skeleton: {
    width: 130,
    height: 70,
    [theme.breakpoints.down("sm")]: {
      width: 80,
      height: 40,
    },
  },
  hoursCollection: {
    width: 268,
    marginLeft: 32,
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      width: 184,
      marginLeft: 0,
      justifyContent: "center",
    },
  },
}));

export default useGameBoxStyles;
