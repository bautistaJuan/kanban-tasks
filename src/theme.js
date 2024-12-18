import { createTheme } from "@mui/material";

export const colors = [
  "#F49D6E",
  "#E85A4F",
  "#FFD166",
  "#8ABEB7",
  "#247BA0",
  "#D3D3D3",
];

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1D1F26",
    },
    primary: {
      main: "#faad00",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    button: {
      textTransform: "unset",
      fontWeight: "700",
      color: "#fff",
    },
    h6: {
      fontWeight: "400",
    },
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        size: "medium",
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: { vertical: "top", horizontal: "center" },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff0bbbbb",
        },
        message: {
          fontSize: "1rem",
          color: "#ff0004",
          transform: "capitalize",
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
