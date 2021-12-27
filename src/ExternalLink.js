import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";

const ExternalLink = ({ href, value }) => {
  return (
    <>
      <Link href={href} target="_blank" rel="noopener">
        {value}
      </Link>
      {' '}
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </>
  );
};

export default ExternalLink;
