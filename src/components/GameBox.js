import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import useGameBoxStyles from "../styles/useGameBoxStyles";
import { API_URL } from "../utils/constants";
import { stripName } from "../utils/stripName";
import GameHours from "./GameHours";
import GameRating from "./GameRating";

const GameBox = ({ data }) => {
  const [loading, setLoading] = useState(Boolean);
  const [openCriticGameData, setOpenCriticGameData] = useState();
  const [gameMatched, setGameMatched] = useState(Boolean);

  const classes = useGameBoxStyles();

  useEffect(() => {
    setLoading(true);
    const cleanName = stripName(data.game_name);
    fetch(`${API_URL}/opencritic/${cleanName}`)
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          setOpenCriticGameData(json);
          setGameMatched(true);
        } else {
          setGameMatched(false);
        }
        setLoading(false);
      });
  }, [data.game_name]);

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        image={`https://howlongtobeat.com/games/${data.game_image}`}
        alt="Game cover"
        className={classes.cardMedia}
      />
      <CardContent className={classes.cardContent}>
        {/* Title */}
        <Typography className={classes.title}>{data.game_name}</Typography>

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
            {data.game_type === "game" ? (
              // Normal game hour numbers
              <>
                <GameHours
                  value={`${Math.round(data.comp_main / 3600)}h`}
                  subtitle={"MAIN"}
                  gameId={data.game_id}
                />
                <GameHours
                  value={`${Math.round(data.comp_plus / 3600)}h`}
                  subtitle={"+EXTRAS"}
                  gameId={data.game_id}
                />
                <GameHours
                  value={`${Math.round(data.comp_100 / 3600)}h`}
                  subtitle={"COMPLETE"}
                  gameId={data.game_id}
                />
              </>
            ) : (
              // Multiplayer game hour numbers
              <>
                <GameHours
                  value={`${Math.round(data.invested_co / 3600)}h`}
                  subtitle={"CO-OP"}
                  gameId={data.game_id}
                />
                <GameHours
                  value={`${Math.round(data.invested_mp / 3600)}h`}
                  subtitle={"VS."}
                  gameId={data.game_id}
                />
              </>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GameBox;
