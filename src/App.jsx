// React imports
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useEffect } from "react";
// Firebase imports
import AuthScreen from "./pages/Auth/index.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
// Zustand
import useStore from "./store.js";
// Components
import Loader from "./components/layout/Loader.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import PublicRoute from "./components/utils/PublicRoute.jsx";
import PrivateRoute from "./components/utils/PrivateRoute.jsx";
// COMPONENT
function App() {
  const { loader, setLoginStatus } = useStore();

  useEffect(() => {
    // Escuchamos el estado de autenticación del usuario de "../pages/Auth(index.jsx".
    // Obtenemos la data del usuario solamente si se logea, de lo contrario obtenemos null
    const unSub = onAuthStateChanged(auth, userDoc => {
      setLoginStatus(!!userDoc);
    });

    return () => unSub();
  }, []);

  if (loader) return <Loader />;
  return (
    <>
      {/* Envuelve todo el contenido de la aplicación dandole los estilos que definimos en theme.js */}
      <ThemeProvider theme={theme}>
        {/* Nos permite utilizar los estilos de material ui */}
        <CssBaseline />
        {/* Rutas */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicRoute Component={AuthScreen} />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute Component={Dashboard} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
