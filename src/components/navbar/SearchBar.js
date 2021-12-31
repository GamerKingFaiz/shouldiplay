import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "16px 0px 16px 16px",
    minWidth: "30%",
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#DCDCFF",
      marginLeft: -8,
      [theme.breakpoints.down("mobileCard")]: {
        marginLeft: 0,
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#DCDCFF",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.50)",
    },
  },
}));

const SearchBar = ({ handleChange, onChange }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("mobileCard"));

  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.form}>
      <InputLabel
        htmlFor="sipSearchbar"
        sx={{
          color: "rgba(220, 220, 255, .7)",
          fontSize: mobile ? 14 : "1rem",
          lineHeight: mobile ? "1.6em" : "1.4375em",
        }}
      >
        Search for games...
      </InputLabel>
      <OutlinedInput
        id="sipSearchbar"
        type="search"
        sx={{ borderRadius: "60px", marginLeft: -1, paddingRight: 3 }}
        onKeyDown={handleChange}
        onChange={(e) => onChange(e.target.value)}
        label="Search for games..."
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search for games"
              edge="end"
              onClick={handleChange}
            >
              <FontAwesomeIcon icon={faSearch} color="#C8D4FF" />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBar;
