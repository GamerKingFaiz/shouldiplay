import { Box, Link, Typography } from "@mui/material";
import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <Box display={"flex"}>
      <Link href=".">
        <img src={logo} height={50} alt="logo" />
      </Link>
      <Box marginLeft={2} display={{ xs: "none", sm: "block" }}>
        <Typography fontSize={25} fontWeight={700}>
          Should I Play This?
        </Typography>
        <Typography fontSize={12} fontWeight={500}>
          Data from OpenCritic & HowLongToBeat
        </Typography>
      </Box>
    </Box>
  );
};

export default Logo;
