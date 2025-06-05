import { useState } from "react";
import { NavLink } from "react-router"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarcontent = [
    { to: "/Myfavorite", label: "我的收藏" },
    { to: "/Ranking", label: "排行榜" },
    { to: "/Login", label: "會員登入" },
  ];

  return (
    <>
    
      <div className="hidden md:flex space-x-6 items-center lg:space-x-8 lg:text-xl ">
        {navbarcontent.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold px-2"
                : "text-gray-700 hover:text-black hover:bg-amber-50 rounded-2xl p-4"
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

     
      <div className="md:hidden relative flex items-end m-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="h-8 w-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

      
        {isOpen && (
  <div className="absolute right-0 top-full mt-2 bg-[#D9B87D] shadow-lg rounded-md py-2 w-48 z-50 flex flex-col space-y-1">
    {navbarcontent.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-sm rounded-md transition-all duration-150 ${
            isActive
              ? " text-black font-semibold"
              : "text-gray-800  hover:text-withe"
          }`
        }
      >
        {label}
      </NavLink>
    ))}
  </div>
)}




      </div>
    </>
  );
}
