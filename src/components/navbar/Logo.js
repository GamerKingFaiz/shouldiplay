import { Link } from "@mui/material";
import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <Link href=".">
      <img src={logo} height={50} alt="logo" />
    </Link>
  );
};

export default Logo;
