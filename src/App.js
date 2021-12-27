import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { HowLongToBeatService } from "howlongtobeat";
import React, { useState } from "react";
import GameBox from "./GameBox";

const hltbService = new HowLongToBeatService();

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Box padding={3}>
      <TextField
        label="Search..."
        onInput={(e) =>
          hltbService
            .search(e.target.value)
            .then((result) => setSearchResults(result))
        }
      />
      <Box display={"flex"} flexWrap={"wrap"}>
        {searchResults.map((gameData) => {
          return <GameBox data={gameData} />;
        })}
      </Box>
    </Box>
  );
};

export default App;
