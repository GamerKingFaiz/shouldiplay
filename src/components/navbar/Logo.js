import { Box, Link, Typography } from "@mui/material";
import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <Link href="." underline="none" display={"flex"}>
      <img src={logo} height={50} alt="logo" />
      <Box marginLeft={2} display={{ xs: "none", sm: "block" }}>
        <Typography fontSize={25} fontWeight={700}>
          Should I Play This?
        </Typography>
        <Typography fontSize={12} fontWeight={500}>
          Data from OpenCritic & HowLongToBeat
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
