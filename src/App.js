import { AppBar, Box, Toolbar } from "@mui/material";
import { HowLongToBeatService } from "howlongtobeat";
import React, { useEffect, useState } from "react";
import GameBox from "./components/GameBox";
import GameBoxSkeleton from "./components/GameBoxSkeleton";
import AboutButton from "./components/navbar/AboutButton";
import Logo from "./components/navbar/Logo";
import SearchBar from "./components/navbar/SearchBar";

const hltbService = new HowLongToBeatService();

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(Boolean);
  const [searchResults, setSearchResults] = useState([]);

  // Modal state and handlers
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Displays initial set of games on page load
  useEffect(() => {
    handleSearch("");
  }, []);

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
    <Box display={"flex"} flexDirection={"column"}>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />

          <SearchBar handleChange={handleChange} onChange={setSearchInput} />

          <AboutButton onClick={handleOpen} open={open} onClose={handleClose} />
        </Toolbar>
      </AppBar>

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
