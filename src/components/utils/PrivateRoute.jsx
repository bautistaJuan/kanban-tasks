import { Navigate } from "react-router-dom";
import useStore from "../../store";
const PrivateRoute = ({ Component }) => {
  const { isLoggedIn } = useStore();
  // Si el usuario no esta logeado lo redireccionamos a la pantalla de Login.
  // De lo contrario mostramos el componente que se le pasa por props (Dashboard)..
  return !isLoggedIn ? <Navigate to="/" replace /> : <Component />;
};

export default PrivateRoute;
