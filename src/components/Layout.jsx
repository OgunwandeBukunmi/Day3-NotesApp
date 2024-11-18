import React, { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
const Layout = () => {
  let location = useLocation().pathname;

  return (
    <>
      <main className="layout">
        {location != "/" ? (
          <NavLink to="/">✖</NavLink>
        ) : (
          <NavLink to="/"></NavLink>
        )}
        {location != "/createnote" ? (
          <NavLink to="/createnote">➕</NavLink>
        ) : (
          <NavLink to="/"></NavLink>
        )}
      </main>
      <Outlet />
    </>
  );
};

export default Layout;
