import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { HowLongToBeatService } from "howlongtobeat";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import GameBox from "./components/GameBox";
import GameBoxSkeleton from "./components/GameBoxSkeleton";
import Logo from "./components/navbar/Logo";
import SearchBar from "./components/navbar/SearchBar";

const hltbService = new HowLongToBeatService();

const App = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(Boolean);
  const [searchResults, setSearchResults] = useState([]);

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
        </Toolbar>
      </AppBar>

      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        minHeight={mobile ? "calc(100vh - 313px)" : "calc(100vh - 289px)"}
      >
        {loading ? (
          <GameBoxSkeleton />
        ) : searchResults.length ? (
          searchResults.map((gameData, index) => {
            return <GameBox data={gameData} key={index} />;
          })
        ) : (
          <Typography variant="h5" padding={3}>
            No Results...
          </Typography>
        )}
      </Box>

      <Divider flexItem />

      <Footer />
    </Box>
  );
};

export default App;
