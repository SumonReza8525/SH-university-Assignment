import React from "react";
import Container from "../../Container";

const Navbar = () => {
  return (
    <div className="bg-amber-50 min-h-24 flex justify-center items-center shadow-lg">
      <Container>
        <div className="navbar flex justify-between items-center  py-6 ">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Faculty</a>
                </li>

                <li>
                  <a>Students</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className=" text-xl lg:text-2xl font-bold">SH University</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Faculty</a>
              </li>
              <li>
                <a>Students</a>
              </li>

              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <button className="bg-purple-600 px-3 py-1.5 rounded-2xl text-nowrap hover:bg-purple-800 transition-all text-gray-200 hover:text-white cursor-pointer duration-300">
            New Assignment
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
