import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const GameHours = ({ value, subtitle }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <Typography fontSize={mobile ? 9 : 11} fontWeight={500}>
        {subtitle.toUpperCase()}
      </Typography>
      <Typography fontSize={mobile ? 15 : 20} fontWeight={700}>
        {value}
      </Typography>
    </Box>
  );
};

export default GameHours;
