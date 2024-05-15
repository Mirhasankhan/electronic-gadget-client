import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashboardLayout;
