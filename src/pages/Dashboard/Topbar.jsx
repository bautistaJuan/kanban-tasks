import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Logout } from "@mui/icons-material";
// eslint-disable-next-line react/prop-types
const Topbar = ({ openModal }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <h1>Tasks Easy</h1>
          <Stack alignItems={"center"} direction="row" spacing={2}>
            <Button variant="contained" color="primary" onClick={openModal}>
              Crear
            </Button>
            <Button endIcon={<Logout />}>Salir</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topbar;
