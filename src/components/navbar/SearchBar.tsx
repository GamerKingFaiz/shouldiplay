import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useCallback, useEffect, useState } from "react";
import theme from "styles/theme";
import gaSearchKey from "utils/gaSearchKey";

// Class names from https://stackoverflow.com/questions/58963242/change-border-color-on-material-ui-textfield
const useStyles = makeStyles({
  form: {
    margin: "16px 0px 16px 16px",
    minWidth: "30%",
    "& .MuiInputLabel-outlined.Mui-focused, .MuiInputLabel-outlined": {
      marginLeft: -8,
      [theme.breakpoints.down("mobileCard")]: {
        marginLeft: 0
      }
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#DCDCFF"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#DCDCFF"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.50)"
    }
  }
});

interface Props {
  handleSearch: (term: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("mobileCard"));
  const classes = useStyles();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    searchInput ? handleSearch(searchInput) : handleSearch("");
  }, []);

  const onClick = useCallback(() => {
    handleSearch(searchInput);
    gaSearchKey("click");
  }, [handleSearch, searchInput]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSearch(searchInput);
        gaSearchKey("enter");
      }
    },
    [handleSearch, searchInput]
  );

  return (
    <FormControl variant="outlined" className={classes.form}>
      <InputLabel
        htmlFor="sipSearchbar"
        sx={{
          color: "rgba(220, 220, 255, .7)",
          fontSize: mobile ? 14 : "1rem",
          lineHeight: mobile ? "1.6em" : "1.4375em"
        }}
      >
        Search for games...
      </InputLabel>
      <OutlinedInput
        id="sipSearchbar"
        type="search"
        sx={{ borderRadius: "60px", marginLeft: -1, paddingRight: 3 }}
        onKeyDown={onKeyDown}
        onChange={e => setSearchInput(e.target.value)}
        label="Search for games..."
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search for games"
              edge="end"
              onClick={onClick}
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
