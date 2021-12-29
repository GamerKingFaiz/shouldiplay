import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import React from "react";

const SearchBar = ({ handleChange, onChange }) => {
  return (
    <FormControl variant="outlined" sx={{ margin: "15px", minWidth: "30%" }}>
      <InputLabel htmlFor="sipSearchbar">Search...</InputLabel>
      <OutlinedInput
        id="sipSearchbar"
        type="search"
        endAdornment={
          <InputAdornment positon="end">
            <IconButton
              aria-label="search for games"
              edge="end"
              onClick={handleChange}
            >
              <FontAwesomeIcon icon={faSearch} />
            </IconButton>
          </InputAdornment>
        }
        onKeyDown={handleChange}
        onChange={(e) => onChange(e.target.value)}
        label="Search..."
      />
    </FormControl>
  );
};

export default SearchBar;
