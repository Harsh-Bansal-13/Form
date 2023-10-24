import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const SideDrawer = () => {
  const [{ sidebarShow, bankdetailsShow }, dispatch] = useStateValue();
  const [Tab, setTab] = useState("");
  const showSideBar = () => {
    dispatch({
      type: actionType.SET_SIDEBAR_SHOW,
      sidebarShow: !sidebarShow,
    });
  };
  const showbankdetailsBar = () => {
    dispatch({
      type: actionType.SET_BANKDETAILS_SHOW,
      bankdetailsShow: true,
    });
  };
  const notshowbankdetails = () => {
    dispatch({
      type: actionType.SET_BANKDETAILS_SHOW,
      bankdetailsShow: false,
    });
  };
  return (
    <div className="flex p-2 flex-col">
      <div className="w-full m-0 h-10" onClick={showSideBar}>
        <i className="fi fi-rr-arrow-left"></i>
      </div>
      <div
        className={`w-full m-0 h-fit flex justify-between p-2 border-y-[1px]  items-center hover:text-green-600 ${
          Tab === "Mydashboard" && "text-green-600"
        }`}
        onClick={() => {
          setTab("Mydashboard");
          notshowbankdetails();
          showSideBar();
        }}
      >
        <div>
          <div>My DashBoard</div>
        </div>
        <i className="fi fi-br-angle-small-right"></i>
      </div>
      <div
        className={`w-full m-0 h-fit flex justify-between p-2 border-y-[1px]  items-center hover:text-green-600 ${
          Tab === "2" && "text-green-600"
        }`}
        onClick={() => {
          setTab("2");
          notshowbankdetails();
          showSideBar();
        }}
      >
        <div>
          <div>TOTM Links</div>
        </div>
        <i className="fi fi-br-angle-small-right"></i>
      </div>
      <div
        className={`w-full m-0 h-fit flex justify-between p-2 border-y-[1px]  items-center hover:text-green-600 object-c  ${
          Tab === "Daily Work Summary" && "text-green-600"
        }`}
        onClick={() => {
          setTab("Daily Work Summary");
          notshowbankdetails();
          showSideBar();
        }}
      >
        <div>
          <div>Daily Work Summary </div>
        </div>

        <i className="fi fi-br-angle-small-right"></i>
      </div>
      <div
        className={`w-full m-0 h-fit flex justify-between p-2 border-y-[1px]  items-center hover:text-green-600 object-contain text-base  ${
          Tab === "Update Bank Details" && "text-green-600"
        }`}
        onClick={() => {
          setTab("Update Bank Details");
          showbankdetailsBar();
          showSideBar();
        }}
      >
        <div>
          <div>Update Bank Details</div>
        </div>
        <i className="fi fi-br-angle-small-right"></i>
      </div>
    </div>
  );
};

export default SideDrawer;
