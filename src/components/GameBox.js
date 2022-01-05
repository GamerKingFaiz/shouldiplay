import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useGameBoxStyles from "../styles/useGameBoxStyles";
import GameHours from "./GameHours";
import GameRating from "./GameRating";

const GameBox = ({ data }) => {
  const [loading, setLoading] = useState(Boolean);
  const [openCriticGameData, setOpenCriticGameData] = useState();
  const [gameMatched, setGameMatched] = useState(Boolean);

  const classes = useGameBoxStyles();

  useEffect(() => {
    setLoading(true);
    const cleanName = data.name.replace(/\s+/g, " ").toLowerCase();
    fetch(`https://shouldiplay-api.herokuapp.com/opencriticid/${cleanName}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.opencriticid) {
          fetch(`https://api.opencritic.com/api/game/${json.opencriticid}`)
            .then((openCriticGame) => openCriticGame.json())
            .then((openCriticGameJson) => {
              setOpenCriticGameData(openCriticGameJson);
              setLoading(false);
            });
        } else setLoading(false);
      });
  }, [data.name]);

  useEffect(() => {
    /**
     * Comparing the name from the HowLongToBeat API (after stripping adjacent
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
  }, [data.name, openCriticGameData]);

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        image={`https://howlongtobeat.com${data.imageUrl}`}
        alt="Game cover"
        className={classes.cardMedia}
      />
      <CardContent className={classes.cardContent}>
        {/* Title */}
        <Typography className={classes.title}>{data.name}</Typography>

        {/* Rating and Times to beat */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={{ xs: "center", mobileCard: "flex-end" }}
          flexDirection={{ xs: "column", mobileCard: "row" }}
          width={{ xs: "100%", sm: "432px" }}
        >
          {loading ? (
            <Skeleton className={classes.skeleton} />
          ) : (
            <GameRating matched={gameMatched} ocgd={openCriticGameData} />
          )}
          <Box className={classes.hoursCollection}>
            {data.timeLabels.map((label, index) => (
              <GameHours
                key={index}
                value={`${Math.round(data[label[0]])}h`}
                subtitle={label[1]}
                gameId={data.id}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GameBox;
