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
    // Regex removes adjacent whitespace characters
    const cleanName = data.name.replace(/\s+/g, " ").toLowerCase();
    fetch(`https://shouldiplay-api.herokuapp.com/opencriticid/${cleanName}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.topCriticScore) {
          setOpenCriticGameData(json);
          setGameMatched(true);
        } else {
          setGameMatched(false);
        }
        setLoading(false);
      });
  }, [data.name]);

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
