import { Grid2, Typography, Stack, IconButton } from "@mui/material";

import AddIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const BoardTab = () => {
  return (
    <Grid2 size={{ xs: 4 }}>
      <Stack p={2} bgcolor="#000000">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Todos</Typography>
          <IconButton>
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography bgcolor="gray" width={"100%"} padding={0.5} variant="h5">
            Todofsdfsds
          </Typography>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Grid2>
  );
};

export default BoardTab;
