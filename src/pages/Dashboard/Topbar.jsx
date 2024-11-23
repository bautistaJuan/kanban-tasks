import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

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
            <Button onClick={() => signOut(auth)} endIcon={<Logout />}>
              Salir
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topbar;
