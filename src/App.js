import {
  AppBar,
  Box,
  Divider,
  Pagination,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { NumberParam, useQueryParam, withDefault } from "use-query-params";
import Footer from "./components/Footer";
import GameBox from "./components/GameBox";
import GameBoxSkeleton from "./components/GameBoxSkeleton";
import Logo from "./components/navbar/Logo";
import SearchBar from "./components/navbar/SearchBar";
import { API_URL } from "./utils/constants";
import history from "./utils/history";

const App = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(Boolean);
  const [rateLimited, setRateLimited] = useState(Boolean);
  const [searchResults, setSearchResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useQueryParam("page", withDefault(NumberParam, 1));

  // https://github.com/pbeshai/use-query-params/blob/master/examples/no-router/src/App.js
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  useEffect(() => {
    // listen for changes to the URL and force the app to re-render
    history.listen(() => {
      forceUpdate();
    });
  }, []);

  const handleSearch = useCallback(
    (value) => {
      setLoading(true);
      setRateLimited(false);
      setSearchResults([]);
      fetch(`${API_URL}/hltb/${value.toLowerCase()}?page=${page}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 404) {
            handleSearch(value); // Try again
            throw new Error(response.status)
          }
          if (response.status === 429) {
            setLoading(false);
            setRateLimited(true);
            throw new Error(response.status);
          }
        })
        .then((result) => {
          setLoading(false);
          setSearchResults(result.data);
          setPageCount(result.pageTotal);
        })
        .catch((error) => {});
    },
    [page]
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

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
          <SearchBar handleSearch={handleSearch} setPage={setPage} />
        </Toolbar>
      </AppBar>

      <Box
        p={mobile ? "8px 8px 16px 8px" : 2}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignContent={"flex-start"}
        minHeight={{
          xs: "calc(100vh - 384px)",
          mobileCard: "calc(100vh - 387px)",
          sm: "calc(100vh - 369px)",
        }}
      >
        {rateLimited ? (
          <Typography variant="h5" padding={3} textAlign="center">
            Too many requests, please try again later.
          </Typography>
        ) : loading ? (
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

      <Pagination
        count={pageCount}
        size={mobile ? "small" : ""}
        page={page}
        onChange={handleChange}
        sx={{ mb: 2, alignSelf: "center" }}
      />

      <Divider flexItem />

      <Footer />
    </Box>
  );
};

export default App;
