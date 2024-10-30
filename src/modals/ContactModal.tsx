import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
  width: 340,
  bgcolor: "background.paper",
  border: "6px solid blue",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

const ContactModal = ({ open, handleClose }: ContactModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box
          className="messageModal"
          component="form"
          action="https://usebasin.com/f/da50ea670849"
          method="POST"
        >
          <Typography id="modal-modal-title" variant="h5" sx={{ mb: 2 }}>
            Please get in touch
          </Typography>
          <TextField
            label="Name"
            name="userName"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Email"
            name="userEmail"
            variant="outlined"
            fullWidth
            type="email"
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            type="tel"
            name="userPhone"
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            maxRows={3}
            name="userText"
            sx={{ mb: 2 }}
            required
          />
          <Button type="submit" variant="contained" sx={{ mb: 2 }}>
            Submit
          </Button>
          <Typography
            id="modal-modal-title"
            variant="h6"
            sx={{ mb: 2, textAlign: "center" }}
          >
            I aim to respond within one working day
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactModal;
