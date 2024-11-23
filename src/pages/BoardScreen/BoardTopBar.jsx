import { AppBar, Toolbar, Stack, Typography, IconButton } from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";

const BoardTopBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ borderBottom: "solid 2px", borderColor: "primary.main" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack spacing={1} direction="row" alignItems={"center"}>
          <IconButton>
            <BackIcon />
          </IconButton>
          <Typography variant="h6">Board name</Typography>
        </Stack>
        <Stack spacing={2} direction="row" alignItems={"center"}>
          <Typography variant="body2">
            Ultima actualizacion: 22/11/2024
          </Typography>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default BoardTopBar;
