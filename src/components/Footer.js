import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "16px" }}>
      <Typography>
        Made with <FontAwesomeIcon icon={faHeart} /> by Faiz
        <br />
        <br />
        Donate to my{" "}
        <Link href="https://www.paypal.com/donate/?business=JDJJYA8RANRHG&no_recurring=0&item_name=This+site+is+created+in+my+free+time+and+doesn%27t+run+ads.+A+donation+helps+pay+for+the+site%27s+maintenance+and+server+costs.&currency_code=USD">
          PayPal
        </Link>{" "}
        to support this site's maintenance & server costs.
        <br />
        <Link href="https://github.com/GamerKingFaiz/shouldiplay">
          GitHub
        </Link>{" "}
        |{" "}
        <Link href="https://github.com/GamerKingFaiz/shouldiplay/issues">
          Report a bug
        </Link>{" "}
        | <Link href="https://twitter.com/gamerkingfaiz">Tweet Me</Link>
        <br />
        <br />
        Ratings data sourced from{" "}
        <Link href="https://opencritic.com/">OpenCritic</Link>.
        <br />
        Hours data sourced from{" "}
        <Link href="https://howlongtobeat.com/">HowLongToBeat</Link>.
      </Typography>
    </footer>
  );
};

export default Footer;
