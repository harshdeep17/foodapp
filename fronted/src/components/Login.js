import axios from "axios";
import React, { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ loginFormObject, selectFormType, setOpenModal, openModal }) => {

    const formRef = useRef(null);
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
        try{
            const {data} = await axios.post("http://localhost:4000/api/auth/login/", {
                password: Password,
                email: Email,
              })
          
            if (data.status === false) {
                // console.log("user exits");
              toast.error(data.msg, toastOptions);
            }
        
            if (data.status === true) {
              // console.log("logged id");
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
        catch (e) {
            console.log(e);
        }
    }
  
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
