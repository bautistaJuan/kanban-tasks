import { useState, useEffect } from "react";
import Modal from "./Modal";
import Topbar from "./Topbar";
import NoBoards from "./NoBoards";
import useApp from "../../hooks/useApp";
import { Stack, Grid2 } from "@mui/material";
import BoardCard from "./BoardCard";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [boards, setBoards] = useState([]);
  const { subscribeToBoards } = useApp();

  useEffect(() => {
    // Inicia la suscripción para obtener los boards del usuario
    const unsubscribe = subscribeToBoards(newBoards => {
      // Actualiza el estado con los nuevos boards que retorna la suscripción
      setBoards(newBoards);
    });
    // Limpia la suscripción cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
      {boards.length === 0 && <NoBoards />}
      <Stack px={3} mt={5}>
        <Grid2 container spacing={1}>
          {boards.map(board => (
            <BoardCard
              key={board.id}
              name={board.name}
              color={board.color}
              id={board.id}
            />
          ))}
        </Grid2>
      </Stack>
    </>
  );
};

export default Dashboard;
