import { Snackbar } from "@mui/material";
import useStore from "../../store";
import theme from "../../theme";
const SnackManager = () => {
  const { toastMsg, setToastMsg } = useStore();
  return (
    <>
      <Snackbar
        message={toastMsg}
        open={!!toastMsg}
        autoHideDuration={1000}
        onClose={() => setToastMsg("")}
        anchorOrigin={theme.components.MuiSnackbar.defaultProps.anchorOrigin}
      />
    </>
  );
};

export default SnackManager;
