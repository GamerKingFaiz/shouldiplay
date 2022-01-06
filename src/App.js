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
import React, { useCallback, useState } from "react";
import Footer from "./components/Footer";
import GameBox from "./components/GameBox";
import GameBoxSkeleton from "./components/GameBoxSkeleton";
import Logo from "./components/navbar/Logo";
import SearchBar from "./components/navbar/SearchBar";

const hltbService = new HowLongToBeatService();

const App = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(Boolean);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = useCallback((value) => {
    setLoading(true);
    setSearchResults([]);
    hltbService.search(value).then((result) => {
      setLoading(false);
      setSearchResults(result);
    });
    window.gtag("event", "search", {
      search_term: value,
    });
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#242A43",
          backgroundImage: "none",
          boxShadow: "0px 2px 40px 0px rgb(0 0 0 / 40%)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />
          <SearchBar handleSearch={handleSearch} />
        </Toolbar>
      </AppBar>

      <Box
        p={mobile ? "8px 8px 32px 8px" : "16px 16px 32px 16px"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignContent={"flex-start"}
        minHeight={{
          xs: "calc(100vh - 342px)",
          mobileCard: "calc(100vh - 345px)",
          sm: "calc(100vh - 321px)",
        }}
      >
        {loading ? (
          <GameBoxSkeleton />
        ) : searchResults.length ? (
          searchResults.map((gameData, index) => {
            return <GameBox data={gameData} key={index} />;
          })
        ) : (
          <Typography variant="h5" padding={3}>
            No Results
          </Typography>
        )}
      </Box>

      <Divider flexItem />

      <Footer />
    </Box>
  );
};

export default App;
