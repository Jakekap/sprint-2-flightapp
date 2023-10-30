import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PrivatedRoutes = ({ redirectPath = "/login", children }) => {
  const isAuthenticate = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (!isAuthenticate.isAuthenticated) return <Navigate to={redirectPath} />;
  return <div>{children ? children : <Outlet />}</div>;
};

export default PrivatedRoutes;
PrivatedRoutes.propTypes = {
  isAuthenticated: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
