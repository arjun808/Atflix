import React, { useEffect, useState } from "react";
import Header from "./Header";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser, addToken } from "../utils/userSlice";
import { useSelector } from "react-redux";
function Login() {
 
  
const token = useSelector((state)=>state.user.token)
  const dispatch = useDispatch();
  const [isSignIn, setisSignIn] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlebuttonClick = () => {
    setisSignIn(!isSignIn);
  };
  const { email, password, name } = formData;
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignIn) {
      const { name, ...OtherThanName } = formData;
      try {
        const response = await axios.post(
          "https://atflix.onrender.com/api/v1/auth/login",
          OtherThanName
        );

        // Check if the request was successful (status code 2xx)
        if (response.status >= 200 && response.status < 300) {
          toast.success("Login Successful");
          console.log("Login successful");
        

          localStorage.setItem("token", JSON.stringify(response.data.token));
         
          dispatch(addToken(response.data.token))
          navigate("/browse");
        } else if (response.status === 401) {
          // Handle unsuccessful response
          if (
            response.data.success === false &&
            response.data.message === "Password is incorrect"
          ) {
            // Password is incorrect
            toast("Password is incorrect");
            console.log("Password is incorrect");
          } else {
            // Other authentication error
            console.log("Authentication failed for other reasons");
          }
        }
      } catch (error) {
        // Handle error if the request fails
        toast.error("login failed");
        console.log(
          "Error while sending Login data to backend:",
          error.message
        );
      }
    } else {
      try {
        const responce = await axios.post(
          "https://atflix.onrender.com/api/v1/auth/signup",
          formData
        );
        if (responce.data.success) {
          toast.success("Signup Successfully");
          setisSignIn(!isSignIn);
        } else {
          toast.err("Signup Failed");
        }
      } catch (err) {
        toast.error("Signup Failed");
        console.log(`error while signup ${err}`);
      }
    }
  };
  useEffect(()=>{
    if(token){
      navigate("/browse")
    }

  },[navigate,token])


  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <div>
      <Header />
      <div className="absolute sm:h-screen w-full">
        <img
          className="sm:h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute p-12 sm:p-4  bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85 hover:bg-opacity-95"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In " : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            name="name"
            onChange={handleChange}
            value={name}
            className="p-4 my-4 w-full bg-gray-600 rounded-lg"
            type="text"
            placeholder="your full name"
          ></input>
        )}
        <input
          name="email"
          onChange={handleChange}
          value={email}
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
          type="text"
          placeholder="email"
        ></input>

        <input
          name="password"
          onChange={handleChange}
          value={password}
          className="p-4 my-4 w-full rounded-lg bg-gray-600"
          type="password"
          placeholder="password"
        ></input>
        <button
          type="submit"
          className="p-4  my-6 bg-red-800 rounded-lg w-full"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handlebuttonClick} className="p-4 cursor-pointer">
          {isSignIn
            ? "Dont have an account ? Sign Up"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
}

export default Login;
