import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ga from "../utils/gaLink";

const RatingSemiCircle = ({ matched, score }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("mobileCard"));

  const ratingColor = (score) => {
    switch (true) {
      case score >= 84:
        return "#18B884";
      case score >= 75 && score <= 83:
        return "#D8BF3D";
      case score >= 66 && score <= 74:
        return "#A07238";
      case score <= 65:
        return "#983C4E";
      default:
        return "#FFF";
    }
  };

  return (
    <CircularProgressbarWithChildren
      value={matched ? score : 0}
      circleRatio={0.5}
      strokeWidth={8}
      styles={buildStyles({
        rotation: 0.75,
        pathColor: ratingColor(score),
        trailColor: "rgba(255, 255, 255, 0.1)",
      })}
    >
      <Typography
        fontSize={mobile ? 9 : 11}
        fontWeight={500}
        marginTop={mobile ? "-19px" : -3}
        textAlign={"center"}
        color={matched ? theme.palette.text.primary : "#515970"}
      >
        {matched ? "OpenCritic" : "RATING"}
      </Typography>
      <Typography
        fontSize={mobile ? 15 : 30}
        fontWeight={700}
        marginTop={mobile ? -0.5 : -1}
        textAlign={"center"}
        color={matched ? "white" : "#515970"}
      >
        {matched ? (score > 0 ? score : "TBD") : "N/A"}
      </Typography>
    </CircularProgressbarWithChildren>
  );
};

const GameRating = ({ matched, ocgd }) => {
  const score = Math.round(ocgd?.topCriticScore);

  return (
    <Box
      width={{ xs: 80, mobileCard: 130 }}
      height={{ xs: 40, mobileCard: 70 }}
      marginBottom={{ xs: 2, mobileCard: 0 }}
    >
      {matched ? (
        <Link
          href={`https://opencritic.com/game/${ocgd.id}/${ocgd.name}`}
          target="_blank"
          rel="noopener"
          underline="none"
          onMouseDown={() => ga("opencritic_rating")}
        >
          <RatingSemiCircle score={score} matched={matched} />
        </Link>
      ) : (
        <RatingSemiCircle score={score} matched={matched} />
      )}
    </Box>
  );
};

export default GameRating;
