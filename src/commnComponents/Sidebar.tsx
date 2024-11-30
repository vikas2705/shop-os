import React from "react"
import StoreIcon from "@mui/icons-material/Store"
import AddHomeIcon from "@mui/icons-material/AddHome"
import AccountTreeIcon from "@mui/icons-material/AccountTree"
import { useNavigate } from "react-router-dom"
const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className=" h-full w-[80px] gap-0 border-r-[1px] opacity-0 sm:w-[60px] sm:h-auto sm:gap-2 sm:opacity-100">
      <img
        src="/Union.png"
        alt="Dashboard"
        className="p-2 rounded block text-left w-11 h-11"
      />
      <ul className="space-y-4 mt-80 pl-3">
        <li
          className="hover:cursor-pointer hover:bg-slate-200 p-2 rounded-lg"
          onClick={() => {
            navigate("/")
          }}
        >
          <AddHomeIcon />
        </li>
        <li
          className="hover:cursor-pointer hover:bg-slate-200 p-2 rounded-lg"
          onClick={() => {
            navigate("/my-store")
          }}
        >
          <StoreIcon />
        </li>
        <li
          className="hover:cursor-pointer hover:bg-slate-200 p-2 rounded-lg"
          onClick={() => {
            navigate("/work-flows")
          }}
        >
          <AccountTreeIcon />
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
