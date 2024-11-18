import { Navigate } from "react-router-dom";
import useStore from "../../store";
const PublicRoute = ({ Component }) => {
  const { isLoggedIn } = useStore();
  // Si el usuario esta logeado lo redireccionamos al dashboard.
  // De lo contrario mostramos el componente que se le pasa por props (AuthhScreen)..
  return isLoggedIn ? <Navigate to="/dashboard" replace /> : <Component />;
};

export default PublicRoute;
