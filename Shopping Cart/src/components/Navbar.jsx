import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="logo.png" alt="logo" className="h-14" />
          </div>
        </NavLink>
        <ul className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="relative">
            <NavLink to="/cart">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center
                items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
