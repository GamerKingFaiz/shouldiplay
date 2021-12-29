import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExternalLink from "../ExternalLink";
import NumberBox from "./NumberBox";

const GameBox = ({ data }) => {
  const [loading, setLoading] = useState(Boolean);
  const [openCriticGameData, setOpenCriticGameData] = useState();
  const [gameMatched, setGameMatched] = useState(Boolean);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.opencritic.com/api/game/search?criteria=${data.name}`)
      .then((openCriticSearchResponse) => openCriticSearchResponse.json())
      .then((openCriticSearchData) => {
        fetch(
          `https://api.opencritic.com/api/game/${openCriticSearchData[0].id}`
        )
          .then((openCriticGame) => openCriticGame.json())
          .then((openCriticGameJson) => {
            setOpenCriticGameData(openCriticGameJson);
            setLoading(false);
          });
      });
  }, [data]);

  useEffect(() => {
    /**
     * Comparing the name from the HowLongToBeat API(after stripping adjacent
     * whitespace) to the name of the first result of the OpenCritic API (after
     * removing everything except alphanumeric characters and whitespace)
     */
    data.name.replace(/\s+/g, " ").toLowerCase() ===
    openCriticGameData?.name
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .toLowerCase()
      ? setGameMatched(true)
      : setGameMatched(false);
  }, [openCriticGameData]);

  return (
    <Card sx={{ margin: 2, width: 500, display: "flex" }}>
      <CardMedia
        component="img"
        image={`https://howlongtobeat.com${data.imageUrl}`}
        alt="Game cover"
        sx={{ width: 150 }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          "&:last-child": { paddingBottom: 2 },
        }}
      >
        {/* Title and Rating */}
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h6">{data.name}</Typography>

          {loading ? (
            <Skeleton variant="circular" width={40} height={40} />
          ) : (
            <NumberBox
              value={
                (gameMatched && openCriticGameData.topCriticScore > -1) ? (
                  <>{Math.round(openCriticGameData.topCriticScore)}</>
                ) : (
                  <>N/A</>
                )
              }
              subtitle={"RATING"}
              bgcolor={"secondary.dark"}
            />
          )}
        </Box>
        {/* Times to beat */}
        <Box display={"flex"} justifyContent={"space-evenly"}>
          {data.timeLabels.map((label, index) => (
            <NumberBox
              key={index}
              value={`${data[label[0]]} hours`}
              subtitle={label[1]}
              bgcolor={"grey.800"}
              borderColor={"divider"}
            />
          ))}
        </Box>
        {/* External Links */}
        <Typography variant="caption">
          <ExternalLink
            href={`https://howlongtobeat.com/game?id=${data.id}`}
            value="HowLongToBeat"
          />{" "}
          {gameMatched && (
            <>
              |{" "}
              <ExternalLink
                href={`https://opencritic.com/game/${openCriticGameData.id}/${openCriticGameData.name}`}
                value="OpenCritic"
              />
            </>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameBox;
