import { Stack, Grid2, Typography, IconButton, Box } from "@mui/material";
import OpenIcon from "@mui/icons-material/Launch";
import { colors } from "../../theme";
// eslint-disable-next-line react/prop-types
const BoardCard = ({ color, name, createdAt, id }) => {
  return (
    <Grid2 size={4} key={id}>
      <Stack
        p={2}
        bgcolor="background.paper"
        borderLeft={"4px solid"}
        borderColor={color ? colors[color] : colors[0]}
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
              {name || "Sin nombre"}
            </Typography>
          </Box>
          <IconButton size="small">
            <OpenIcon />
          </IconButton>
        </Stack>
        <Typography variant="caption">{createdAt}</Typography>
      </Stack>
    </Grid2>
  );
};

export default BoardCard;
