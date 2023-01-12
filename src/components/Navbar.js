import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav class="bg-gray-200 pt-7">
        <div class="lg:flex hidden justify-between content-center pl-[15px] md:pl-[60px] pr-10 lg:px-32">
          <div class="w-36 -mt-10 -mb-8 ">
            <img src={logo} />
          </div>

          <div class="lg:flex hidden">
            <h4 class="text-gray-500 font-semibold mx-3 cursor-pointer ml-10">
              <NavLink
                exact
                to="/about-us"
                activeClassName="border-b-2 border-primary text-black pb-[4px]"
              >
                About Us
              </NavLink>
            </h4>

            <h4 class="text-gray-500 font-semibold mx-3 cursor-pointer ml-10">
              <NavLink
                to="/services"
                activeClassName="border-b-2 border-primary text-black pb-[4px]"
              >
                Our services
              </NavLink>
            </h4>
            <h4 class="text-gray-500 font-semibold mx-3 cursor-pointer ml-10">
              <NavLink
                to="/blog"
                activeClassName="border-b-2 border-primary text-black pb-[4px]"
              >
                Blog
              </NavLink>
            </h4>
            <h4 class="text-gray-500 font-semibold mx-3 cursor-pointer ml-10">
              <NavLink
                to="/login"
                activeClassName="border-b-2 border-primary text-black pb-[4px]"
              >
                Login
              </NavLink>
            </h4>
            <div class="">
              <NavLink to="/application" activeClassName="">
                <button className="bg-primary2 text-sm py-[10px] px-[10px] font-normal rounded-[4px] text-white ml-10 -mt-[10px]">
                  Become a Vendor
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div class="lg:hidden flex px-[15px] justify-between ">
          <div class="w-28 -mt-8 -mb-5">
            <img src={logo} />
          </div>

          <div class="text-right">
            <svg
              onClick={() => setShow(!show)}
              class="w-6 h-6 flex text-primary ml-[150px] hover:cursor-pointer lg:hidden"
              id="burger"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            {show ? (
              <div class=" md:block bg-gray-200 " id="menu">
                <h4
                  onClick={() => setShow(!show)}
                  class="text-gray-500 font-semibold cursor-pointer my-2"
                >
                  <NavLink to="/about-us">About us</NavLink>
                </h4>
                <h4
                  onClick={() => setShow(!show)}
                  class="text-gray-500 font-semibold cursor-pointer my-2"
                >
                  <NavLink to="/services">Our services</NavLink>
                </h4>

                <h4
                  onClick={() => setShow(!show)}
                  class="text-gray-500 font-semibold cursor-pointer"
                  id="main-pricing mt-2"
                >
                  <NavLink to="/blog">Blog</NavLink>
                </h4>
                <h4
                  onClick={() => setShow(!show)}
                  class="text-gray-500 font-semibold cursor-pointer mt-2"
                >
                  <NavLink to="/planner">Consult a planner</NavLink>
                </h4>
                <h4
                  onClick={() => setShow(!show)}
                  class="text-gray-500 font-semibold cursor-pointer mt-2 mb-4"
                >
                  <NavLink to="/login">Login</NavLink>
                </h4>
                <div class="mb-4">
                  <NavLink to="/application" activeClassName="">
                    <button className="bg-primary2 text-sm py-[10px] px-[10px] font-normal rounded-[4px] text-white ml-10 -mt-[10px]">
                      Become a Vendor
                    </button>
                  </NavLink>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
