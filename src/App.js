import { Box, TextField } from "@mui/material";
import { HowLongToBeatService } from "howlongtobeat";
import React, { useState } from "react";
import GameBox from "./components/GameBox";
import GameBoxSkeleton from "./components/GameBoxSkeleton";

const hltbService = new HowLongToBeatService();

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(Boolean);

  return (
    <Box padding={3} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <TextField
        label="Search..."
        onInput={(e) => {
          setLoading(true);
          hltbService.search(e.target.value).then((result) => {
            setLoading(false);
            setSearchResults(result);
          });
        }}
      />
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
        {loading ? (
          <GameBoxSkeleton />
        ) : (
          searchResults.map((gameData, index) => {
            return <GameBox data={gameData} key={index}/>;
          })
        )}
      </Box>
    </Box>
  );
};

export default App;
