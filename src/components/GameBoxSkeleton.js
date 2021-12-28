import { Box, Skeleton } from "@mui/material";

const GameBoxSkeleton = () => {
  return (
    <Box display={"flex"} flexWrap={"wrap"}>
      <Box margin={2}>
        <Skeleton variant="rectangular" width={500} height={225} />
      </Box>
      <Box margin={2}>
        <Skeleton variant="rectangular" width={500} height={225} />
      </Box>
      <Box margin={2}>
        <Skeleton variant="rectangular" width={500} height={225} />
      </Box>
    </Box>
  );
};

export default GameBoxSkeleton;
