import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import ga from "../utils/gaLink";

const GameHours = ({ value, subtitle, gameId }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("mobileCard"));

  switch (subtitle) {
    case "Main Story":
      subtitle = "MAIN";
      break;
    case "Main + Extra":
      subtitle = "+EXTRAS";
      break;
    case "Completionist":
      subtitle = "COMPLETE";
      break;
    default:
      subtitle = subtitle.toUpperCase();
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={{ xs: "center", sm: "flex-start" }}
      flexBasis={"33.3333%"}
    >
      <Link
        href={`https://howlongtobeat.com/game?id=${gameId}`}
        target="_blank"
        rel="noopener"
        underline="none"
        textAlign="center"
        onMouseDown={() => ga("howlongtobeat_hours")}
      >
        <Typography
          fontSize={mobile ? 9 : 11}
          fontWeight={500}
          color={theme.palette.text.primary}
        >
          {subtitle}
        </Typography>
        <Typography
          fontSize={mobile ? 15 : 20}
          fontWeight={700}
          color={theme.palette.text.primary}
        >
          {value === "0h" ? "--" : value}
        </Typography>
      </Link>
    </Box>
  );
};

export default GameHours;
