import React from "react";
import video from '../assets/Future.mp4'
const Login = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left side with dark contrast color */}
        
        <div className="flex-1 bg-gray-900 text-white p-8 text-center pt-60">
          {/* Your content for the left side goes here */}
          <video  className="w-auto h-auto indent-px top-1/2 transform  -translate-y-1/3 rounded-full" autoPlay muted loop> 
          <source src={video} type='video/mp4'/>
          </video>
         <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
         {/* <h1 className="text-4xl font-bold mb-4 ">Welcome</h1> */}
         <h2 className="text-zinc-200 font-bold mb-6 text-center text-5xl">LOGIN</h2>
          <p className="text-lg mb-8">
          Strive not to be a success, but rather to be of value
          </p>
         </div>
        </div>
        {/* Right side with login form */}
        <div className="flex-1 bg-slate-700 p-8 px-20 pt-20 pb-5">
          {/* Login form */}
          
          <form className="text-center text-zinc-200 bg-slate-600 p-24 h-4/5 rounded-3xl ">
            {/* Add your login form fields here */}
            <div className="mb-10">
              <label
                htmlFor="username"
                className="block  text-s font-semibold mb-2 text-left"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border border-gray-300 rounded text-black font-semibold"
              />
            </div>
            <div className="mb-16">
              <label
                htmlFor="password"
                className="block  text-s font-semibold mb-2 text-left "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded text-black font-semibold"
              />
            </div>
            <button
              type="submit"
              className="bg-slate-950 hover:bg-slate-800 transition delay-150 ease-in-out duration-300 hover:scale-125 text-white px-4 py-2 rounded"
            >
              Login
            </button>

           
          </form>
        </div>

      </div>
    </>
  );
};

export default Login;
