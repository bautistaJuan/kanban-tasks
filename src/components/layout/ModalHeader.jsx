import { Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
const ModalHeader = ({ title, closeModal }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h6">{title}</Typography>
      <IconButton onClick={closeModal} size="small">
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};

export default ModalHeader;
