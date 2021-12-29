import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Card,
  CardContent,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

const AboutButton = ({ onClick, open, onClose }) => {
  return (
    <>
      <Tooltip title="About">
        <IconButton onClick={onClick} aria-label="more info">
          <Badge>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: 300,
            maxWidth: 600,
          }}
        >
          <CardContent>
            <Typography id="modal-modal-title" variant="h6">
              test title
            </Typography>
            <Typography id="modal-modal-description" variant="p">
              lorem ipsum
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default AboutButton;
