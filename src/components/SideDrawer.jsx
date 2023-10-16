import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const SideDrawer = () => {
  const [{ sidebarShow }, dispatch] = useStateValue();
  const [Tab, setTab] = useState("Mydashboard");
  const showSideBar = () => {
    dispatch({
      type: actionType.SET_SIDEBAR_SHOW,
      sidebarShow: !sidebarShow,
    });
  };
  return (
    <div className="flex p-2 flex-col">
      <div className="w-full m-0 h-10" onClick={showSideBar}>
        <i className="fi fi-rr-arrow-left"></i>
      </div>
      <div
        className={`w-full m-0 h-10 flex justify-between p-6 border-y-[1px]  items-center hover:text-green-600 ${
          Tab === "Mydashboard" && "text-green-600"
        }`}
        onClick={() => {
          setTab("Mydashboard");
        }}
      >
        <div>My DashBoard</div>
        <i className="fi fi-br-angle-small-right"></i>
      </div>
      <div
        className={`w-full m-0 h-10 flex justify-between p-6 border-y-[1px]  items-center hover:text-green-600 ${
          Tab === "2" && "text-green-600"
        }`}
        onClick={() => {
          setTab("2");
        }}
      >
        <div>TOTM Links</div>
        <i className="fi fi-br-angle-small-right"></i>
      </div>
      <div
        className={`w-full m-0 h-10 flex justify-between p-6 border-y-[1px]  items-center hover:text-green-600 ${
          Tab === "Daily Work Summary" && "text-green-600"
        }`}
        onClick={() => {
          setTab("Daily Work Summary");
        }}
      >
        <div>Daily Work Summary</div>
        <i className="fi fi-br-angle-small-right"></i>
      </div>
      <div
        className={`w-full m-0 h-10 flex justify-between p-6 border-y-[1px]  items-center hover:text-green-600 ${
          Tab === "Update Bank Details" && "text-green-600"
        }`}
        onClick={() => {
          setTab("Update Bank Details");
        }}
      >
        <div>Update Bank Details</div>
        <i className="fi fi-br-angle-small-right"></i>
      </div>
    </div>
  );
};

export default SideDrawer;
