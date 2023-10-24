import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ redirectPath = "/mybooking", children }) => {
  const isAuthenticate = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (isAuthenticate) return <Navigate to={redirectPath} />;
  return <div>{children ? children : <Outlet />}</div>;
};

export default PublicRoutes;
PublicRoutes.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
