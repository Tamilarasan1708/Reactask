import { FaBars } from 'react-icons/fa';
import { MdOutlineMessage } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineSetting , AiOutlineShoppingCart } from "react-icons/ai";
import { RiPieChart2Fill } from "react-icons/ri";
import { LuBarChart2 } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { PiSignOut } from "react-icons/pi";
import logo from "../Images/logoA.jpg"


const SidebarLink = ({ icon: Icon, label, to, isCollapsed, toggleSidebar }) => (
    
    <NavLink
  to={to}
  className={({ isActive }) =>
    `flex items-center space-x-3 w-full px-4 ${
      isActive ? "text-white hover:border p-2 rounded-xl bg-[#F3941E]" : "hover:text-[#F3941E]"
    } ${isCollapsed ? "hidden" : "block"}`
  }
  onClick={toggleSidebar}
>
  <div className="flex items-center w-full space-x-4">
    <Icon />
    <span className={`${isCollapsed ? "hidden" : "block"}`}>{label}</span>
  </div>
</NavLink>

);


const Sidebar = ({  toggleSidebar }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsOpen(!isOpen);
  };

  
  const links = [
    { icon: RiPieChart2Fill, label: 'Home', to: '/' },
    { icon: LuBarChart2, label: 'Leaderboard', to: '/leaderboard' },
    { icon: AiOutlineShoppingCart , label: 'Order', to: '/order' },
    { icon: IoBagHandleOutline, label: 'Products', to: '/products' },
    { icon: BsGraphUp, label: 'Sales Report', to: '/sales' },
    { icon: MdOutlineMessage, label: 'Messages', to: '/messages' },
    { icon: AiOutlineSetting, label: 'Settings', to: '/settings' },
    { icon: PiSignOut, label: 'Signout', to: '/signout' },
  ];

  return (
    <aside
    className={`${isOpen ? 'block' : 'hidden'} ${
        isCollapsed ? 'w-10' : 'w-64'
      } lg:block bg-white text-slate-500 h-full fixed lg:relative z-20 transition-all duration-300`}
    >
      <div className="flex justify-center space-x-3 items-center px-5 mt-6">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <h2 className={`text-[#30385E] font-semibold ${isOpen ? 'block' : 'hidden'}`}>
         Kaveri Hospital
        </h2>
        <FaBars onClick={handleCollapse} className="cursor-pointer " />
      </div>
      <ul className="space-y-7 mt-10 flex flex-col items-center px-10">
        {links.map((link, index) => (
          <SidebarLink
            key={index}
            icon={link.icon}
            label={link.label}
            to={link.to}
            isCollapsed={isCollapsed}
            toggleSidebar={toggleSidebar}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
