import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const schema = yup
  .object({
    username: yup.string().required("Name is required"),
    roll: yup.string().required("roll is required"),
    dept: yup.string().required("Department is required"),
    address: yup.string().required("Address is required"),
    email: yup
      .string()
      .email("this must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "the password must be six characters."),
    confirmpassword: yup
      .string()
      .required("ConfirmPassword is required")
      .min(6, "the confirmpassword must be six characters.")
      .oneOf([yup.ref("password")], "your password does not match"),
  })
  .required();

const RegisterFom = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


 

  // const onSubmit = (values) =>setData(values);
  const onSubmit = async(values) =>{
    await axios.post("http://localhost:5000/register",values).
   then(res => console.log(res));

    navigate('/loginpage')
  


  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div>
          <h1>RegisterForm</h1>
        </div>
        <div className="form-control">
          <label>Student Name</label>
          <input
            type="text"
            name="username"
            placeholder="Student Name"
            {...register("username", {
              required: true,
            })}
          />
        </div>
        {/* {errors.username && errors.username.type === "required" && (
          <span style={{ color: "red" }}>Name is required</span>
        )} */}
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}

        <div className="form-control">
          <label>Student Roll</label>
          <input
            type="text"
            name="roll"
            placeholder="Student Roll"
            {...register("roll", {
              required: true,
            })}
          />
        </div>
        {/* {errors.roll && errors.roll.type === "required" && (
          <span style={{ color: "red" }}>Roll Number is required</span>
        )} */}
        {errors.roll && <p style={{ color: "red" }}>{errors.roll.message}</p>}
        <div className="form-control">
          <label>Student Department</label>
          <input
            type="text"
            name="dept"
            placeholder="Student Department"
            {...register("dept", {
              required: true,
            })}
          />
        </div>
        {/* {errors.dept && errors.dept.type === "required" && (
          <span style={{ color: "red" }}>Department is required</span>
        )} */}
        {errors.dept && <p style={{ color: "red" }}>{errors.dept.message}</p>}
        <div className="form-control">
          <label>Student Address</label>
          <input
            type="text"
            name="address"
            placeholder="Student Address "
            {...register("address", {
              required: true,
            })}
          />
        </div>
        {/* {errors.address && errors.address.type === "required" && (
          <span style={{ color: "red" }}>Address is required</span>
        )} */}
        {errors.address && (
          <p style={{ color: "red" }}>{errors.address.message}</p>
        )}
        <div className="form-control">
          <label>Student Email</label>
          <input
            type="text"
            name="email"
            placeholder="Student Email"
            {...register("email")}
          />
        </div>
        {/* {errors.email && errors.email.type === "required" && (
          <span style={{ color: "red" }}>Email is required</span>
        )}
        {errors.email && errors.email.type === "pattern1" && (
          <span style={{ color: "red" }}>Email is Not valid</span>
        )} */}
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <div className="form-control">
          <label>Student Password</label>
          <input
            type="password"
            name="password"
            placeholder="Student Password"
            {...register("password")}
          />
        </div>

        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            {...register("confirmpassword")}
          />
        </div>
        {errors.confirmpassword && (
          <p style={{ color: "red" }}>{errors.confirmpassword.message}</p>
        )}
        <div className="form-control">
          <button >Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterFom;