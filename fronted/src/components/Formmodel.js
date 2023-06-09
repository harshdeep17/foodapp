import React, { useState } from "react";
import Cancelbutton from "../assets/cancel.png";
import Burgerlogo from "../assets/burgerlogo1.png";
import SignUp from "./SignUp";
import Login from "./Login";

const Formmodel = ({ openModal, setOpenModal }) => {
  const [selectFormType, setSelectFormType] = useState("SignUp");

  const signUpFormObject = {
    title: "SignUp",
    fields: ["Name", "Username", "Email", "Password", "ConfirmPassword"],
    submitBUtton: "SignUp",
  };

  const loginFormObject = {
    title: "Login",
    fields: ["Email", "Password"],
    submitBUtton: "Login",
  };

  const changeFormType = () => {
    if (selectFormType === "SignUp") {
      setSelectFormType("Login");
    } else {
      setSelectFormType("SignUp");
    }
  };


  return (
    <>
      <div
        className={`bg-stone-900 my-8  w-1/3 top-1/ left-1/3  shadow-lg absolute shadow-black rounded-md
                      ${openModal ? "" : "hidden"}`}
      >
        <div className="py-4">
          <div className="flex justify-center pb-2">
            <img
              src={Cancelbutton}
              alt=""
              onClick={() => {
                setOpenModal(!openModal);
              }}
              className="w-10 object-contain absolute right-4"
            />
            <img src={Burgerlogo} alt="" className="w-20" />
          </div>
          <div className="mb-2">
            <h1 className="text-white text-center text-2xl font-bold">
              {selectFormType} Form
            </h1>
          </div>
          <div className="grid grid-cols-2 rounded-md w-80 mx-auto  border-2 border-yellow-500 text-white text-2xl">
            <div
              className={`text-center p-2 ${
                selectFormType === "SignUp" ? "bg-yellow-500" : ""
              }`}
              onClick={changeFormType}
            >
              SignUp
            </div>
            <div
              className={`text-center p-2 ${
                selectFormType === "Login" ? "bg-yellow-500" : ""
              }`}
              onClick={changeFormType}
            >
              Login
            </div>
          </div>
        </div>
          {
            selectFormType === "SignUp"
            ? <SignUp signUpFormObject={signUpFormObject} setOpenModal={setOpenModal} openModal={openModal} selectFormType={selectFormType}/>
            : <Login loginFormObject={loginFormObject} setOpenModal={setOpenModal} openModal={openModal} selectFormType={selectFormType}/>
          }
      </div>
    </>
  );
};

export default Formmodel;
