//   MUI components
import {
  Dialog,
  Stack,
  Typography,
  TextField,
  Box,
  Button,
} from "@mui/material";
// compnents
import ModalHeader from "../../components/layout/ModalHeader";
import { colors } from "../../theme";
import { useState } from "react";
import useApp from "../../hooks/useApp";

// eslint-disable-next-line react/prop-types
const Modal = ({ closeModal }) => {
  const { createBoard } = useApp();

  const [name, setName] = useState("");
  const [color, setColor] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateBoard = async () => {
    if (!name) return null;
    try {
      setIsLoading(true);
      await createBoard({ name, color });
      closeModal();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Dialog open onClose={closeModal} fullWidth maxWidth="xs">
        <Stack p={2}>
          <ModalHeader title={"Crear tarea"} closeModal={closeModal} />
          <Stack my={5} spacing={2}>
            <TextField
              value={name}
              onChange={e => setName(e.target.value)}
              label="Nueva tarea"
            />
            <Stack direction="row" alignItems={"center"} spacing={0.8}>
              <Typography>Color:</Typography>
              {colors.map((clr, index) => (
                <Box
                  key={clr}
                  onClick={() => setColor(index)}
                  width={23}
                  height={23}
                  borderRadius="50%"
                  backgroundColor={clr}
                  sx={{
                    cursor: "pointer",
                    border: color === index ? "3px solid #393939" : "none",
                    outline: `1px solid ${clr}`,
                  }}
                />
              ))}
            </Stack>
          </Stack>
          <Button
            disabled={isLoading}
            onClick={handleCreateBoard}
            variant="contained"
            color="primary"
          >
            Crear
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};

export default Modal;
