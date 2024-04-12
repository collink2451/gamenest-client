import React from "react";
import { Outlet } from "react-router-dom";

function PublicRoute() {
  /* const loggedIn = useAppSelector(loggedInSelector);
  const loginNext = localStorage.getItem("login-next");

  if (loggedIn) {
    if (loginNext) {
      return <Navigate to={loginNext} replace />;
    }
    return <Navigate to="/" />;
  } */

  return <Outlet />;
}

export default PublicRoute;
