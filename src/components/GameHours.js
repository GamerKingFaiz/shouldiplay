import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";

const GameHours = ({ value, subtitle, gameId }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
console.log(theme);
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
        textAlign="center"
      >
        <Typography
          fontSize={mobile ? 9 : 11}
          fontWeight={500}
        >
          {subtitle}
        </Typography>
        <Typography
          fontSize={mobile ? 15 : 20}
          fontWeight={700}
          // textAlign="center"
        >
          {value}
        </Typography>
      </Link>
    </Box>
  );
};

export default GameHours;
