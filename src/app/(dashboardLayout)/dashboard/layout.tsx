import Sidebar from "@/components/shared/Sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar> {children}</Sidebar>
    </div>
  );
};

export default DashboardLayout;
