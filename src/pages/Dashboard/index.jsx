import { useState, useEffect } from "react";
import CreateBoardModal from "./CreateBoardModal";
import Topbar from "./Topbar";
import NoBoards from "./NoBoards";
import useApp from "../../hooks/useApp";
import { Stack, Grid2 } from "@mui/material";
import Loader from "../../components/layout/Loader";
import useStore from "../../store";
import BoardCard from "./BoardCard";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchBoards } = useApp();
  const { isFetchedBoards, boards } = useStore();
  useEffect(() => {
    // Le preguntamos al store si ya pedimos los boards, si no es así, las pedimos.
    if (!isFetchedBoards) fetchBoards(setIsLoading);
    // Si ya pedimos los boards, entonces ya tenemos la respuesta, así que podemos dejar de cargar
    else setIsLoading(false);
  }, []);
  // Si la store no tiene boards, entonces mostramos el loader
  if (isLoading) return <Loader />;
  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {boards.length === 0 && <NoBoards />}
      <Stack px={3} mt={5}>
        <Grid2 container spacing={1}>
          {boards.map((board, index) => (
            <BoardCard key={index} {...board} />
          ))}
        </Grid2>
      </Stack>
    </>
  );
};

export default Dashboard;
