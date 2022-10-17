import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ga from "../utils/gaLink";

const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("mobileCard"));

  return (
    <footer style={{ textAlign: "center", padding: "32px 16px" }}>
      <Typography fontSize={mobile ? 14 : "1rem"}>
        Made with <FontAwesomeIcon icon={faHeart} /> by Faiz
        <br />
        <br />
        Donate to my{" "}
        <Link
          href="https://www.paypal.com/donate/?business=JDJJYA8RANRHG&no_recurring=0&item_name=This+site+is+created+in+my+free+time+and+doesn%27t+run+ads.+A+donation+helps+pay+for+the+site%27s+maintenance+and+server+costs.&currency_code=USD"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("paypal")}
          className="umami--pointerdown--paypal"
        >
          PayPal
        </Link>{" "}
        to support this site's maintenance & server costs.
        <br />
        <Link
          href="https://github.com/GamerKingFaiz/shouldiplay"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("github")}
          className="umami--pointerdown--github"
        >
          GitHub
        </Link>{" "}
        |{" "}
        <Link
          href="https://github.com/GamerKingFaiz/shouldiplay/issues"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("github_issue")}
          className="umami--pointerdown--github-issue"
        >
          Report a bug
        </Link>{" "}
        |{" "}
        <Link
          href="https://twitter.com/gamerkingfaiz"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("twitter")}
          className="umami--pointerdown--twitter"
        >
          Tweet Me
        </Link>
        <br />
        <br />
        Ratings data sourced from{" "}
        <Link
          href="https://opencritic.com/"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("opencritic_footer")}
          className="umami--pointerdown--opencritic-footer"
        >
          OpenCritic
        </Link>
        .
        <br />
        Hours data sourced from{" "}
        <Link
          href="https://howlongtobeat.com/"
          target="_blank"
          rel="noopener"
          underline="none"
          fontWeight={700}
          onMouseDown={() => ga("howlongtobeat_footer")}
          className="umami--pointerdown--hltb-footer"
        >
          HowLongToBeat
        </Link>
        .
      </Typography>
    </footer>
  );
};

export default Footer;
