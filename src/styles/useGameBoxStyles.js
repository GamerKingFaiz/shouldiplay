import { makeStyles } from "@mui/styles";

const useGameBoxStyles = makeStyles((theme) => ({
  card: {
    margin: 16,
    width: 580,
    height: 175,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      margin: 8,
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
      justifyContent: "space-between",
      "&:last-child": {
        paddingBottom: 8,
      },
    },
  },
  title: {
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
  hourCollection: {
    width: 300,
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      width: 168,
    },
  },
}));

export default useGameBoxStyles;
