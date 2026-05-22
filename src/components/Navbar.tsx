// import NavLogo from '../assets/images/navLOGO.svg'

import { useContext } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link,  NavLink, useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { UserLogin, setUserLogin } = useContext(UserContext);
  // console.log(UserLogin);
  let navigate = useNavigate();
  function LogOut() {
    localStorage.removeItem("usertoker");
    setUserLogin(null);
    navigate("/login");
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Brands", path: "/brands" },
    { name: "Orders", path: "/cart" },
  ];

  return (
    <nav className="w-full z-50 fixed top-0   mb-80 pb-6  bg-[#f4f6f8] px-6  py-4 flex items-center justify-between shadow-sm">
      <div className="flex justify-between w-lvh">
        <Link to={'/'}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/src/assets/images/navLOGO.svg" alt="Logo" className="" />
          </div>
        </Link>
        {UserLogin !== null ? (
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[17px] pb-1 border-b-2 transition-colors ${
                      isActive
                        ? "text-[#0aad0a] border-[#0aad0a] font-medium"
                        : "text-slate-500 border-transparent hover:text-[#0aad0a]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-between w-sm">
        {UserLogin !== null ? (
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link to={'/cart'}>
              <div className="relative cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#0aad0a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* <span className="absolute -top-2 -right-3 bg-gray-300 text-slate-700 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span> */}
              </div>
              </Link>

              <div className="relative cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#88d49e]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* <span className="absolute -top-2 -right-3 bg-gray-300 text-slate-700 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">1</span> */}
              </div>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <Link to={"/login"}>
              {" "}
              <span className=" text-lg  cursor-pointer"> log in </span>{" "}
            </Link>{" "}
            <Link to={"/register"}>
              {" "}
              <span className=" text-lg  cursor-pointer"> register </span>{" "}
            </Link>{" "}
          </>
        )}

        <div className="flex items-center gap-3 text-slate-900 ml-2">
          <span className="font-bold cursor-pointer hover:text-[#0aad0a] text-lg">
            <FaFacebookF />
          </span>
          <span className="font-bold cursor-pointer hover:text-[#0aad0a] text-lg">
            <FaTwitter />
          </span>
          <span className="font-bold cursor-pointer hover:text-[#0aad0a] text-lg">
            <FaLinkedinIn />
          </span>
          <span className="font-bold cursor-pointer hover:text-[#0aad0a] text-lg">
            <FaYoutube />
          </span>
          <span className="font-bold cursor-pointer hover:text-[#0aad0a] text-lg">
            <FaTwitch />
          </span>
        </div>
        {UserLogin !== null ? (
          <button
            onClick={LogOut}
            className="text-slate-900 hover:text-[#0aad0a] cursor-pointer ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
