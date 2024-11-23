import { Grid2 } from "@mui/material";
import BoardTab from "./BoardTab";
const BoardInterface = () => {
  return (
    <>
      <Grid2 container px={4} mt={6} spacing={2}>
        <BoardTab />
      </Grid2>
    </>
  );
};

export default BoardInterface;
