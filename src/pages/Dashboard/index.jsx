import { useState } from "react";
import Modal from "./Modal";
import Topbar from "./Topbar";
import NoBoards from "./NoBoards";

import { Stack, Grid2 } from "@mui/material";
import BoardCard from "./BoardCard";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
      {/* <NoBoards /> */}
      <Stack px={3} mt={5}>
        <Grid2 container spacing={1}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </Grid2>
      </Stack>
    </>
  );
};

export default Dashboard;
