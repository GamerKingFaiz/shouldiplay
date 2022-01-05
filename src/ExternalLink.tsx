import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";

interface Props {
  href: string;
  value: string;
}

const ExternalLink = ({ href, value }: Props) => {
  return (
    <>
      <Link href={href} target="_blank" rel="noopener">
        {value}
      </Link>{" "}
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </>
  );
};

export default ExternalLink;
