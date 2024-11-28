import { Grid2, Typography, Stack, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const BoardTab = ({ name, addTaskTo }) => {
  return (
    <Grid2 size={{ xs: 12, md: 4 }}>
      <Stack p={2} bgcolor="#000000">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">{name}</Typography>
          <IconButton onClick={addTaskTo}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography bgcolor="gray" width={"100%"} padding={0.5} variant="h5">
            New Task For ToDo
          </Typography>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Grid2>
  );
};
BoardTab.propTypes = {
  name: PropTypes.string.isRequired,
  addTaskTo: PropTypes.func.isRequired,
};

export default BoardTab;
