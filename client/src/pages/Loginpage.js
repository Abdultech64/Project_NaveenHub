import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { store } from "../App";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [token, setToken] = useContext(store);
  const [data, setData] = useState();

  const onSubmit = (register) => {
    axios.post("http://localhost:5000/login", register).then((result) => {
      console.log(result);
      setToken(result.data.token);
      // redirect("/myprofile");
    });
  };
  
  // const handleClick = () => { 
  //     history.push("/myprofile");
  //     }
  if (token) {
    console.log("hello world");
    // return redirect("/myprofile");
    // history.push("/myprofile");
    navigate("/myprofile");
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div>
          <h1>Login Form</h1>
        </div>
        <div className="form-control">
          <label>Student Email</label>
          <input
            type="text"
            name="email"
            placeholder="Student Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/,
                message: "Email is Not valid",
              },
            })}
          />
        </div>
        {/* {errors.email && errors.email.type === "required" && (
          <span style={{ color: "red" }}>Email is required</span>
        )}
        {errors.email && errors.email.type === "pattern1" && (
          <span style={{ color: "red" }}>Email is Not valid</span>
        )} */}
        {<p style={{ color: "red" }}>{errors.email?.message}</p>}
        <div className="form-control">
          <label>Student Password</label>
          <input
            type="password"
            name="password"
            placeholder="Student Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                message: "Password is Not valid mini 7 and max 15 character",
              },
            })}
          />
        </div>
        {/* {errors.password && errors.password.type === "required" && (
          <span style={{ color: "red" }}>Password is required</span>
        )} */}
        {<p style={{ color: "red" }}>{errors.password?.message}</p>}

        <div className="form-control">
          <button >Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;