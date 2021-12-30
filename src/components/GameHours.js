import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const GameHours = ({ value, subtitle }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      alignItems={"flex-start"}
    >
      <Typography fontSize={mobile ? 9 : 11} fontWeight={500}>
        {subtitle}
      </Typography>
      <Typography fontSize={mobile ? 15 : 20} fontWeight={700}>
        {value}
      </Typography>
    </Box>
  );
};

export default GameHours;
