import React, { useState, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Form = () => {
  const [isSubmit, setisSubmit] = useState(false);
  const [name, setname] = useState("");
  const [accno, setaccno] = useState("");
  const [ifsc, setifsc] = useState("");
  const [bankname, setbankname] = useState("");
  const [bankcity, setbankcity] = useState("");
  const [branchName, setbranchName] = useState("");
  const [relation, setrelation] = useState("");
  const [date, setdate] = useState("");

  var monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const SubmitDetails = () => {
    var currentDate = new Date();
    var monthIndex = currentDate.getMonth();
    var monthName = monthNames[monthIndex];
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var formattedDate = monthName + " " + day + ", " + year;
    setdate(formattedDate);
    setisSubmit(true);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-3">
        <h3 className={`text-4xl font-bold`}>Bank Details</h3>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eum
          reiciendis eius aliquid harum deserunt unde cupiditate. Numquam, sed
          temporibus. Corporis id perspiciatis distinctio modi quaerat non nisi
          molestias aperiam autem fugiat libero, eligendi et magnam beatae
          quibusdam minima animi.
        </p>
      </div>
      <div className="border-slate-200 border-[1px]">
        <form>
          <div className="flex gap-5 p-6 pl-6 m-0 flex-col md:flex-row">
            <label className="font-bold text-base  md:w-1/2">
              {" "}
              ACCOUNT HOLDER NAME
            </label>
            <input
              type="text"
              className={`w-full md:w-1/2 h-full bg-transparent outline-none border-[1px] p-1 text-base border-slate-200 placeholder:text-gray-400 text-textColor ${
                isSubmit && "bg-green-50"
              }`}
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter Account Holder Name"
            />
          </div>
          <div className="flex gap-5 p-6 pl-6 m-0 flex-col md:flex-row ">
            <label className="font-bold text-base  md:w-1/2">
              {" "}
              ACCOUNT NUMBER
            </label>
            <input
              type="text"
              className={`w-full md:w-1/2 h-full bg-transparent outline-none border-[1px] p-1 text-base border-slate-200 placeholder:text-gray-400 text-textColor ${
                isSubmit && "bg-green-50"
              }`}
              value={accno}
              onChange={(e) => setaccno(e.target.value)}
              placeholder="Enter Account Number"
            />
          </div>
          <div className="flex gap-5 p-6 pl-6 m-0 flex-col md:flex-row ">
            <label className="font-bold text-base  md:w-1/2"> IFSC CODE</label>
            <input
              type="text"
              className={`w-full md:w-1/2 h-full bg-transparent outline-none border-[1px] p-1 text-base border-slate-200 placeholder:text-gray-400 text-textColor ${
                isSubmit && "bg-green-50"
              }`}
              value={ifsc}
              onChange={(e) => setifsc(e.target.value)}
              placeholder="Enter IFSC Code"
            />
          </div>
          <div className="flex gap-5 p-6 pl-6 m-0 flex-col md:flex-row ">
            <label className="font-bold text-base  md:w-1/2"> BANK NAME</label>
            <input
              type="text"
              className={`w-full md:w-1/2 h-full bg-transparent outline-none border-[1px] p-1 text-base border-slate-200 placeholder:text-gray-400 text-textColor ${
                isSubmit && "bg-green-50"
              }`}
              value={bankname}
              onChange={(e) => setbankname(e.target.value)}
              placeholder="Bank Name"
            />
          </div>
          <div className="flex gap-5 p-6 pl-6 m-0 flex-col md:flex-row ">
            <label className="font-bold text-base  md:w-1/2"> BANK CITY</label>
            <input
              type="text"
              className={`w-full md:w-1/2 h-full bg-transparent outline-none border-[1px] p-1 text-base border-slate-200 placeholder:text-gray-400 text-textColor ${
                isSubmit && "bg-green-50"
              }`}
              value={bankcity}
              onChange={(e) => setbankcity(e.target.value)}
              placeholder="Bank City"
            />
          </div>
          <div className="flex gap-5 p-6 pl-6 m-0 flex-col md:flex-row ">
            <label className="font-bold text-base  md:w-1/2">
              {" "}
              BRANCH NAME
            </label>
            <input
              type="text"
              className={`w-full md:w-1/2 h-full bg-transparent outline-none border-[1px] p-1 text-base border-slate-200 placeholder:text-gray-400 text-textColor ${
                isSubmit && "bg-green-50"
              }`}
              value={branchName}
              onChange={(e) => setbranchName(e.target.value)}
              placeholder="Branch Name"
            />
          </div>
          <div className="flex gap-5 p-6 pl-6 m-0 flex-col md:flex-row ">
            <label className="font-bold text-base  md:w-1/2">
              {" "}
              RELATION WITH ACCOUNT HOLDER
            </label>
            <input
              type="text"
              className={`w-full md:w-1/2 h-full bg-transparent outline-none border-[1px] p-1 text-base border-slate-200 placeholder:text-gray-400 text-textColor ${
                isSubmit && "bg-green-50"
              }`}
              value={relation}
              onChange={(e) => setrelation(e.target.value)}
              placeholder="Relation with Account Holder"
            />
          </div>
          <div className="flex gap-5 p-6 items-center flex-col md:flex-row">
            <label className="font-bold text-base  md:w-1/2"> CONSENT</label>
            <div
              className={`w-full md:w-1/2 h-full bg-transparent outline-none border-[1px] p-1 text-base border-slate-200 placeholder:text-gray-400 text-textColor ${
                isSubmit && "bg-green-50"
              }`}
            >
              {!isSubmit && (
                <span>
                  <input type="checkbox" required />
                </span>
              )}
              <span>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                doloribus provident qui perferendis iusto dolore accusantium
                laudantium dignissimos architecto eligendi!
              </span>
              {isSubmit && <p className="font-bold">FILED ON {date}</p>}
            </div>
          </div>
          <div className="flex gap-5 p-6 items-end justify-end">
            {!isSubmit && (
              <button
                className="bg-green-600 text-white rounded-md p-2"
                onClick={SubmitDetails}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="items-center justify-center text-center">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        possimus doloremque, vitae aperiam mollitia excepturi dolores
        reprehenderit minus culpa, maxime, molestiae vel necessitatibus
        accusantium deleniti natus quos in odio placeat.
      </div>
      <hr></hr>
    </div>
  );
};

export default Form;
