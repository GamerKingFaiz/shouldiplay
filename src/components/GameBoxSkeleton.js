import { Box, Skeleton } from "@mui/material";

const GameBoxSkeleton = () => {
  return (
    <Box display={"flex"} flexWrap={"wrap"}>
      <Box margin={2}>
        <Skeleton variant="rectangular" width={210} height={118} />
      </Box>
      <Box margin={2}>
        <Skeleton variant="rectangular" width={210} height={118} />
      </Box>
      <Box margin={2}>
        <Skeleton variant="rectangular" width={210} height={118} />
      </Box>
    </Box>
  );
};

export default GameBoxSkeleton;
