import React from "react";
import { Outlet } from "react-router-dom";

function PrivateRoute() {
  /* const loggedIn = useAppSelector(loggedInSelector);
  const dispatch = useAppDispatch();
  const location = useLocation();

  if (!loggedIn) {
    dispatch(checkLogin());
  }

  if (!loggedIn && location.pathname !== "/") {
    localStorage.setItem("login-next", `${location.pathname}${location.search}`);
  }

  if (loggedIn) {
    localStorage.removeItem("login-next");
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" replace />; */

  return <Outlet />;
}

export default PrivateRoute;
