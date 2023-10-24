import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  return <div>{children ? children : <Outlet />}</div>;
};

export default PublicRoutes;
PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
