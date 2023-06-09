import React, { useRef, useState } from "react";
import axios from "axios";
import Userlogo from "../assets/userlogo.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const SignUp = ({signUpFormObject, selectFormType, setOpenModal, openModal }) => {

    const formRef = useRef(null);
    const [values, setValues] = useState({
        Name: "",
        Username: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
    });
    
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    // toast.error("check", toastOptions);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleReigsterSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const { Name, Username, Email, Password, ConfirmPassword } = values;

    // console.log( {
    //     name: Name,
    //     username: Username,
    //     email: Email,
    //     password: Password,
    //     address: [],
    //     profile_path: Userlogo,
    //   });
    const handleValidation = ()=>{
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;  
      if(Password !== ConfirmPassword){
        // console.log("1");
        toast.error("Password didn't match", toastOptions);
        return false;
      }
      else if (Name.length <= 3) {
        // console.log("2");
        toast.error("Name should be greater than 3 characters.",toastOptions);
        return false;
      }
      else if (Username.length <= 4) {
        // console.log("3");
        toast.error("Username should be greater than 4 characters.",toastOptions);
        return false;
      }
      else if(Password.length <= 4){
        // console.log("4");
        toast.error("Password Length should be greater than 4", toastOptions);
        return false;
      }
      else if(!emailRegex.test(Email)){
        // console.log("5");
        toast.error("Email format should be right", toastOptions);
        return false;
      }
      // console.log("6");
      return true;
    }
      
      if(handleValidation()){
        console.log("validated");
        const {data} = await axios.post("http://localhost:4000/api/auth/register", {
            name: Name,
            username: Username,
            email: Email,
            password: Password,
            address: [],
            profile_path: Userlogo,
          })

        console.log(data);
    
        if (data.status === false) {
            // console.log("user exits");
          toast.error(data.msg, toastOptions);
        }
    
        if (data.status === true) {
          // console.log("create user");
          // console.log(data);
          localStorage.setItem(
            "food-app-current-user",
            JSON.stringify(data.user)
            );
          formRef.current.reset();
          setOpenModal(!openModal)
          // toast.success(data.msg, toastOptions);
        }
      } 
  };
  return (
    <>
      <form action="" ref={formRef}  className="flex-col space-y-4 my-4" onSubmit={handleReigsterSubmit}>
      {
        signUpFormObject.fields.map((placeholderValue, index) => {
        return (
          <div key={index} className="flex justify-center">
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
        <button type="submit" className=" text-center block mx-auto w-80 rounded-md text-white bg-yellow-500 mb-4 py-2 text-2xl
            " >
              {selectFormType}
        </button>
      </form>
        <ToastContainer/>
    </>
  );
};

export default SignUp;
