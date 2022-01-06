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
import React, { useEffect, useState } from "react";
import gaSearchKey from "../../utils/gaSearchKey";

// Class names from https://stackoverflow.com/questions/58963242/change-border-color-on-material-ui-textfield
const useStyles = makeStyles((theme) => ({
  form: {
    margin: "16px 0px 16px 16px",
    minWidth: "30%",
    "& .MuiInputLabel-outlined.Mui-focused, .MuiInputLabel-outlined": {
      marginLeft: -8,
      [theme.breakpoints.down("mobileCard")]: {
        marginLeft: 0,
      },
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#DCDCFF",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#DCDCFF",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.50)",
    },
  },
}));

const SearchBar = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("mobileCard"));

  const classes = useStyles();

  // Displays initial set of games on page load
  useEffect(() => {
    searchInput ? handleSearch(searchInput) : handleSearch("");
  }, []);

  const handleClick = () => {
    handleSearch(searchInput);
    gaSearchKey("click");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(searchInput);
      gaSearchKey("enter");
    }
  };

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
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchInput(e.target.value)}
        label="Search for games..."
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search for games"
              edge="end"
              onClick={handleClick}
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
