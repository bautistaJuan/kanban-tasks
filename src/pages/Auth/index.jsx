// Logo
import LogoImg from "../../assets/react.svg";
// React imports
import { useState } from "react";
// Components
import ImageEl from "../../components/utils/ImageEl";
// MUI
import { Container, Stack, Typography, TextField, Button } from "@mui/material";
// Firebase
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
// Para setear el estado inicial de isLogin
let initForm = {
  email: "",
  password: "",
};
// COMPONENT
const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado inicial para verificar que tipo de accion se esta realizando(login/register).
  const [isLoading, setIsLoading] = useState(false); // Estado para verificar si se esta cargando (lo usamos para deshabilitar el boton).
  const [form, setForm] = useState(initForm); // Data del usuario.
  const authText = isLogin ? "No tienes una cuenta?" : "Ya tienes una cuenta?"; // Cambia el estado de isLogin para saber si el usuario ya tiene una cuenta o no.

  /**
   * Actualiza el estado del formulario con el valor proporcionado.
   *
   * @param {Event} event - Evento de cambio que dispara el cambio de estado.
   * @param {Object} o - Representa el estado anterior (oldState) del formulario.
   */
  const handleChange = event =>
    setForm(o => ({
      ...o,
      /*Extrae el valor de la propiedad 'name' del elemento donde se dispara el evento.
       'event.target.name' se usa para identificar la propiedad del formulario que se va actualizar.
       'event.target.value' proporciona el nuevo valor del campo y se asigna a la propiedad.*/
      [event.target.name]: event.target.value,
    }));
  // Manejador de auntenticación
  // NOTA: en App.jsx utilizamos onAuthStateChanged para saber si el usuario se ha autenticado o no.
  // esto se utiliza para redireccionar a la pantalla de inicio o de login.
  const handleAuth = async () => {
    try {
      setIsLoading(true); // Desabilita el boton de autenticación.
      if (isLogin) {
        // Si se está en modo login autenticamos al user.
        await signInWithEmailAndPassword(auth, form.email, form.password);
      } else {
        // Si no esta en modo login creamos un nuevo usuario.
        await createUserWithEmailAndPassword(auth, form.email, form.password);
      }
    } catch (error) {
      // msg la obtenemos del error de firebase. Podemos ver los errores en la consola del navegador.
      const msg = error.code.split("auth/")[1].split("-").join(" ");
      alert(msg);
      setIsLoading(false);
    }
  };
  return (
    <Container
      sx={{
        mt: 10,
      }}
      maxWidth="xs"
    >
      <Stack mb={6} spacing={4} alignItems={"center"}>
        <ImageEl src={LogoImg} />
        <Typography color="rgba(255, 255, 255)">
          Organiza tus tareas de manera mas fácil
        </Typography>
      </Stack>
      <Stack spacing={2} mb={3}>
        <TextField
          value={form.email}
          name="email"
          type="email"
          onChange={handleChange}
          label="Email"
        />
        <TextField
          value={form.password}
          name="password"
          type="password"
          onChange={handleChange}
          label="Password"
        />
        <Button
          disabled={isLoading || !form.email.trim() || !form.password.trim()}
          variant="contained"
          size="large"
          color="primary"
          onClick={handleAuth}
        >
          {isLogin ? "Ingresar" : "Registrarme"}
        </Button>
      </Stack>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() => setIsLogin(o => !o)}
        textAlign="center"
      >
        {authText}
      </Typography>
    </Container>
  );
};

export default AuthScreen;
