import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element: Element }) {
  const token = useSelector((state) => state.user.token);

  return token !== null ? <Element /> : <Navigate to="/" />;
}

export default PrivateRoute;
