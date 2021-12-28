import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { HowLongToBeatService } from "howlongtobeat";
import React, { useState } from "react";
import GameBox from "./components/GameBox";
import GameBoxSkeleton from "./components/GameBoxSkeleton";

const hltbService = new HowLongToBeatService();

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(Boolean);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    if (event.keyCode === 13) {
      // Enter key
      handleSearch(event.target.value);
    } else if (event.type === "click") {
      // Mouse click
      handleSearch(searchInput);
    }
  };

  const handleSearch = (value) => {
    setLoading(true);
    hltbService.search(value).then((result) => {
      setLoading(false);
      setSearchResults(result);
    });
  };

  return (
    <Box
      padding={3}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <FormControl variant="outlined">
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
          onChange={(e) => setSearchInput(e.target.value)}
          label="Search..."
        />
      </FormControl>

      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
        {loading ? (
          <GameBoxSkeleton />
        ) : (
          searchResults.map((gameData, index) => {
            return <GameBox data={gameData} key={index} />;
          })
        )}
      </Box>
    </Box>
  );
};

export default App;
