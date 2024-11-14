import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AuthScreen from "./pages/Auth/index.jsx";
function App() {
  return (
    <>
      {/* Envuelve todo el contenido de la aplicación dandole los estilos que definimos en theme.js */}
      <ThemeProvider theme={theme}>
        {/* Nos permite utilizar los estilos de material ui */}
        <CssBaseline />
        {/* Rutas */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthScreen />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
