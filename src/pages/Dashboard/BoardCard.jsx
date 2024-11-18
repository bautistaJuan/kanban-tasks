import { Stack, Grid2, Typography, IconButton, Box } from "@mui/material";
import OpenIcon from "@mui/icons-material/Launch";

const BoardCard = () => {
  return (
    <Grid2 size={4}>
      <Stack
        p={2}
        bgcolor="background.paper"
        borderLeft={"4px solid"}
        borderColor={"primary.main"}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width={"50%"}>
            <Typography
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              variant="h6"
            >
              Nombre de terea{" "}
            </Typography>
          </Box>
          <IconButton size="small">
            <OpenIcon />
          </IconButton>
        </Stack>
        <Typography variant="caption">Creado el: 11/11/2024</Typography>
      </Stack>
    </Grid2>
  );
};

export default BoardCard;
