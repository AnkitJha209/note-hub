import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="text-gray-500 flex justify-center gap-10 py-3 w-full">
      <NavLink
        to=""
        className={({ isActive }) =>
          `text-white px-4 py-2 font-semibold rounded-lg ${
            isActive ? "bg-blue-900" : "bg-blue-500"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="all-notes"
        className={({ isActive }) =>
          `text-white px-4 py-2 font-semibold rounded-lg hover:bg-blue-800 ${
            isActive ? "bg-blue-900" : "bg-blue-500"
          }`
        }
      >
        All Notes
      </NavLink>
    </div>
  );
};

export default NavBar;
