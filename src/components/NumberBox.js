import { Box, Typography } from "@mui/material";

const NumberBox = ({ value, subtitle, bgcolor, borderColor }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        sx={{ bgcolor: bgcolor }}
        border={`1px solid ${borderColor}`}
        borderRadius={2}
        padding={"8px"}
        textAlign={"center"}
      >
        {value}
      </Typography>
      <Typography variant="caption">{subtitle}</Typography>
    </Box>
  );
};

export default NumberBox;
