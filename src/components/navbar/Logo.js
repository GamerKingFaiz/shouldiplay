import { Box, Link, Typography, useTheme } from "@mui/material";
import logo from "../../images/logo.png";
import ga from "../../utils/gaLink";

const Logo = () => {
  const theme = useTheme();

  return (
    <Link
      href="."
      underline="none"
      display={"flex"}
      onMouseDown={() => ga("logo")}
    >
      <img src={logo} height={50} alt="logo" />
      <Box marginLeft={2} display={{ xs: "none", sm: "block" }}>
        <Typography fontSize={25} fontWeight={700}>
          Should I Play This?
        </Typography>
        <Typography
          fontSize={12}
          fontWeight={500}
          color={theme.palette.text.primary}
        >
          Data from OpenCritic & HowLongToBeat
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
