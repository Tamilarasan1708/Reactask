import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './SideBar';
const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col ">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-5 flex-1 overflow-y-auto bg-[#F9FAFB]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
