import { Grid2 } from "@mui/material";
import BoardTab from "./BoardTab";
import AddTaskModal from "./AddTaskModal";
import { useState } from "react";
const tabs = ["Todos", "InProgress", "Completed"];

const BoardInterface = () => {
  const [addTaskTo, setAddTaskTo] = useState("");
  return (
    <>
      <Grid2 container px={4} mt={6} spacing={2}>
        {!!addTaskTo && (
          <AddTaskModal tabName={addTaskTo} onClose={() => setAddTaskTo("")} />
        )}
        {tabs.map((tab, i) => (
          <BoardTab key={i} name={tab} addTaskTo={() => setAddTaskTo(tab)} />
        ))}
      </Grid2>
    </>
  );
};

export default BoardInterface;
