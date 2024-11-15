import { CircularProgress, Stack } from "@mui/material";
const Loader = () => {
  return (
    <Stack mt={10} alignItems={"center"}>
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
