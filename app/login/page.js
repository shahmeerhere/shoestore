"use client"
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="bg-white text-black">
      <div className="flex justify-center w-[100vw] p-8">

        <div className="container bg-blue-50 h-[100vh] p-6 flex justify-center items-center">


          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="p-2 m-3 font-serif text-center text-8xl font-light">LOGIN</div>
            <p className="p-2 m-3 font-serif text-center font-light">Enter Your Info</p>
            
            <input
              className="bg-gray-200 p-4 m-2 rounded-sm font-extralight w-full"
              type="text"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <input
              className="bg-gray-200 p-4 m-2 rounded-sm font-extralight w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <button type="submit"
              className="cursor-pointer bg-gray-900 text-white w-full rounded-sm p-4 m-3" >
              Submit
            </button>

            <div>
              <span className="w-full m-3">Don't have account?</span>
              <span className="w-full cursor-pointer underline hover:text-blue-400">
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


  const metadata = {
  title: "MORVA- LOGIN",
  description: "Connect to MORVA ",
  icons: {
    icon: "./favicon.ico",
  },
}


export default Login;
