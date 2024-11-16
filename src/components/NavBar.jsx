import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { darkTheme, lightTheme } from "../features/themeSlice/themeSlice";

const NavBar = () => {
  const dispatch = useDispatch()
  const themeMode = useSelector(state => state.theme.themeMode)
  console.log(themeMode)

  const handleChange = (e) => {
    // console.log(e.currentTarget.checked)
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus){
        let theme = 'dark'
        dispatch(darkTheme(theme))
    }
    else{
        let theme = 'light'
        dispatch(lightTheme(theme))
    }
  }

  useEffect(() => {
    console.log(themeMode)
  },[])




  return (
    <div className="text-gray-500 bg-blue-500 dark:bg-gray-900 flex justify-center items-center gap-10 py-3 w-full">
      <NavLink
        to=""
        className={({ isActive }) =>
          `text-white px-4 py-2 font-semibold rounded-lg ${
            isActive ? "bg-blue-800" : "bg-blue-700"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="all-notes"
        className={({ isActive }) =>
          `text-white px-4 py-2 font-semibold rounded-lg hover:bg-blue-800 ${
            isActive ? "bg-blue-800" : "bg-blue-700"
          }`
        }
      >
        All Notes
      </NavLink>
      <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" 
      value=""  
      className="sr-only peer" 
      checked={themeMode === 'dark'}
      onChange={handleChange}/>
      
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium dark:text-gray-500 text-gray-900">
        Toggle Theme
      </span>
    </label>

    </div>
  );
};

export default NavBar;
