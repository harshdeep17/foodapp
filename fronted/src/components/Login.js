import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync } from "../features/auth/authSlice";

const Login = ({ loginFormObject, selectFormType, setOpenModal, openModal }) => {

    const formRef = useRef(null);
    const dispatch = useDispatch();
    const reduxstate = useSelector((state) => state.auth);
    const formfields = {
      Username: "",
      Password: "",
    };
    const [values, setValues] = useState(formfields);
  
    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
  
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async (e) =>{
        e.preventDefault();
        const { Email, Password } = values;
        dispatch(loginUserAsync({password: Password,email: Email}));
    }

    useEffect(() => {
      if (reduxstate.status === "idle") {
        if (reduxstate.loginStatus === false) {
          // console.log("user exits");
        toast.error(reduxstate.msg, toastOptions);
      }
  
      if (reduxstate.loginStatus === true) {
        // console.log("logged id");
        // console.log(data);
        localStorage.setItem(
          "food-app-current-user",
          JSON.stringify(reduxstate.user)
          ); 
        formRef.current.reset();
        setOpenModal(!openModal)
        // toast.success(data.msg, toastOptions);
      }
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduxstate]);
  
  return (
    <>
     <form action="" ref={formRef}  className="flex-col space-y-4 my-4" onSubmit={handleLoginSubmit}>
    {
      loginFormObject.fields.map((placeholderValue) => {
      return (
        <div className="flex justify-center">
          <input
            type={placeholderValue === "Email"? "email":"text"}
            className="p-2 w-80 border-black border-2 focus:border-yellow-500 text-lg bg-transparent text-white cursor-pointer outline-none rounded-lg"
            placeholder={placeholderValue}
            name={placeholderValue}
            onChange={handleChange}  
          />
        </div>
      );
    })}
    <button type="submit" className=" text-center block mx-auto w-80 rounded-md text-white bg-yellow-500 mb-4 py-2 text-2xl" >
              {selectFormType}
        </button>
    </form>
      <ToastContainer/>
  </>
  );
};

export default Login;
