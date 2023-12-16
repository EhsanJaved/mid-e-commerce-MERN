import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
const Header = ({ Logo }) => {
  // const [log, setlog] = useState("Login");
  let logout = () => {
    if (token === true) {
      localStorage.removeItem("token");
      // setToken(null);
    }
  };
  return (
    <>
      <header className="flex bg-slate-900 text-white list-none justify-between items-center">
        <li className=" m-3 mx-2 p-3 ">
          <img className=" w-16 h-16" src={Logo} />
        </li>
        <spam className="text-xl font-serif"> Anchor Clothing</spam>
        <div className="flex text-center ml-52">
          <li className="p-3  ml-10 m-3 hover:bg-slate-600 rounded-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 m-3 hover:bg-slate-600 rounded-xl">
            <Link to="/about-us">About</Link>
          </li>
          <li className="p-3 m-3 hover:bg-slate-600 rounded-xl">
            <Link to="/products">Products</Link>
          </li>
        </div>
        <li className="p-3 m-2  ml-auto flex">
          <input
            className="bg-slate-800 rounded-md p-0 px-3 py-1 ml-auto"
            placeholder="Search..."
          />
          <button className="ml-2 p-1 hover:bg-slate-600 rounded-xl">
            Search
          </button>
        </li>
        <li className="p-3  ml-auto bg-slate-600 rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
          </svg>
        </li>
        <li
          className="ml-auto p-3 m-3  hover:bg-slate-600 rounded-xl cursor-pointer"
          onClick={logout}
        >
          <Link to="/login" className="text-sm font-semibold flex mx-2">
            <div className="hover:mr-2">
              {/* {log} */}
              Sign out
            </div>
            <span className="hover:ml-2" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </li>
      </header>
      <Outlet />
      <footer className="bg-slate-900 text-white py-5 flex ">
        <ul className="flex p-2 px-10 ">
          <li className="text-2xl mt-5">
            <img className="w-24 h-20" src={Logo} />
          </li>
        </ul>

        <ul className="px-32 ">
          <li className="text-2xl">ABOUT US</li>
          <li className="p-1">
            <a href="#">Home</a>
          </li>
          <li className="p-1">Contact</li>
          <li className="p-1">FAQ’s</li>
        </ul>

        <ul className="px-32 ">
          <li className="text-2xl">USEFUL LINKS</li>
          <li className="p-1">Refund Policy</li>
          <li className="p-1">Shipping Informations</li>
          <li className="p-1">Terms & Conditions</li>
        </ul>

        <ul className="pl-12">
          <li className="text-2xl">CONTACT</li>
          <li className="p-1">contact@info.com</li>
          <li className="p-1">929-242-6868</li>
          <li className="p-1">123 Fifth Avenue, New York, NY 10160</li>
        </ul>
      </footer>
    </>
  );
};

export default Header;
