import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import SideDrawer from "./SideDrawer";
const Header = () => {
  const [Tab, setTab] = useState("Home");
  const [{ sidebarShow }, dispatch] = useStateValue();
  const showSideBar = () => {
    dispatch({
      type: actionType.SET_SIDEBAR_SHOW,
      sidebarShow: !sidebarShow,
    });
  };
  return (
    <header className="w-screen">
      <div className="hidden md:flex w-full h-auto  items-center justify-between  pb-0 border-b-[1px] border-slate-400 ">
        {" "}
        <div className="p-4 font-bold">Logo</div>
        <div className="flex items-center justify-center gap-6">
          <span
            onClick={() => {
              setTab("Home");
            }}
            className={`font-bold  hover:border-b-[2px] hover:border-green-500 p-4 ${
              Tab === "Home" && "border-green-500 border-b-[2px]"
            }`}
          >
            Home
          </span>
          <span
            onClick={() => {
              setTab("Service");
            }}
            className={`font-bold  hover:border-b-[2px] hover:border-green-500 p-4 ${
              Tab === "Service" && "border-green-500 border-b-[2px]"
            }`}
          >
            Service
          </span>
          <span
            onClick={() => {
              setTab("Blog");
            }}
            className={`font-bold  hover:border-b-[2px] hover:border-green-500 p-4 ${
              Tab === "Blog" && "border-green-500 border-b-[2px]"
            }`}
          >
            Blog
          </span>
          <span
            onClick={() => {
              setTab("Offers");
            }}
            className={`font-bold  hover:border-b-[2px] hover:border-green-500 p-4 ${
              Tab === "Offers" && "border-green-500 border-b-[2px]"
            }`}
          >
            Offers
          </span>
          <span
            onClick={() => {
              setTab("About us");
            }}
            className={`font-bold  hover:border-b-[2px] hover:border-green-500 p-4 ${
              Tab === "About us" && "border-green-500 border-b-[2px]"
            }`}
          >
            About us
          </span>
          {/* <ul className="flex items-center gap-20 pb-0"></ul> */}
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="p-4 ">
            <i className="fi fi-rr-search"></i>
          </div>
          <div className="p-4 ">
            <i className="fi fi-rs-bell"></i>
          </div>
          <div className="p-4 ">
            <i className="fi fi-rr-user"></i>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:hidden w-full h-auto pb-0 border-b-[1px] border-slate-400">
        <div className="p-4" onClick={showSideBar}>
          <i className="fi fi-rr-menu-burger"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
