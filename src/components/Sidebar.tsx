import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 left-0 w-36 bg-[#FFFFFF] text-black h-full p-5">
      <img
        src="/home.png" // Ensure the image path is correct
        alt="Dashboard"
        className="p-2 rounded block w-full text-left"
      />
      <ul className="space-y-4 mt-40">
        <li>
          <span>Dashboard</span> {/* Add text next to the image */}
        </li>
        <li>
          <button
            onClick={() => navigate("/orders")}
            className="hover:bg-gray-700 p-2 rounded block w-full text-left"
          >
            Orders
          </button>
        </li>
        {/* Add more buttons here as necessary */}
      </ul>
    </div>
  );
};

export default Sidebar;
