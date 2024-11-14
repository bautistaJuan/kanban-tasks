import {
  Container,
  Typography,
  //   OutlinedInput,
  //   Stack,
  //   Button,
  //   Typography,
} from "@mui/material";
import LogoImg from "../../assets/react.svg";
import ImageEl from "../../components/utils/ImageEl";

const AuthScreen = () => {
  return (
    <Container>
      <ImageEl src={LogoImg} />
      <Typography>Hola</Typography>
    </Container>
  );
};

export default AuthScreen;
