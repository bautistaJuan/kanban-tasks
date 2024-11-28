import {
  Dialog,
  Typography,
  Stack,
  IconButton,
  Chip,
  OutlinedInput,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
const AddTaskModal = ({ tabName, onClose }) => {
  return (
    <>
      <Dialog open maxWidth="xs" fullWidth>
        <Stack p={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Add Task</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            marginBottom={2}
            alignItems="center"
          >
            <Typography>Status: </Typography>
            <Chip size="small" label={tabName} />
          </Stack>
          <OutlinedInput />
          <Button sx={{ marginTop: 2 }} variant="contained">
            Add Task
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};

AddTaskModal.propTypes = {
  tabName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddTaskModal;
