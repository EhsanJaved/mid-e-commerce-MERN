import React, { useState } from "react";
import axios from "axios";
import video from "../assets/Future.mp4";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sumbitData = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/createUser",
        { name, email, password }
      );
      localStorage.setItem("token", JSON.stringify(data));
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-slate-600 w-full h-screen px-56 p-12 text-center">
      <video
        className="rounded-3xl w-3/3 filter blur-3xl border"
        src={video}
        autoPlay
        muted
        loop
      ></video>
      <div className="pb-10 text-center px-10 text-white bg-transparent  h-4/4 rounded-3xl transform -translate-y-96">
        {/* Add your login form fields here */}
        <h2 className="text-zinc-200 font-bold  text-center text-5xl transform -translate-y-10">
          Sign up
        </h2>
        <div className="mb-2">
          <label
            htmlFor="username"
            className="block  text-s font-semibold mb-2 text-left ml-36"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-2/3 p-2 border border-gray-300 rounded text-black font-semibold"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block  text-s font-semibold mb-2 text-left ml-36"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-2/3 p-2 border border-gray-300 rounded text-black font-semibold "
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block  text-s font-semibold mb-2 text-left ml-36"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-2/3 p-2 border border-gray-300 rounded text-black font-semibold "
          />
        </div>
        <button
          onClick={sumbitData}
          type="submit"
          className="bg-slate-500 hover:bg-slate-800 transition delay-150 ease-in-out duration-300 hover:scale-125 text-white px-4 py-2 rounded "
        >
          Sign Up
        </button>
        <div className="mt-4">
          have account{" "}
          <span className="text-blue-600 font-bold">
            <Link to="/login"> Sign up</Link>
          </span>
          ?
        </div>
      </div>
    </div>
  );
};

export default Register;
