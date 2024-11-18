import { Stack, Typography } from "@mui/material";
const NoBoards = () => {
  return (
    <>
      <Stack textAlign={"center"} spacing={1}>
        <Typography variant="h4">No hay tareas</Typography>
        <Typography variant="h6">
          ¡Puedes cear una tarea ahora mismo!
        </Typography>
      </Stack>
    </>
  );
};

export default NoBoards;
