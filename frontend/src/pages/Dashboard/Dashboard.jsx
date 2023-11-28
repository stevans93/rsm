import React, { useEffect, useState } from 'react';
import {Outlet} from "react-router-dom";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar/DashboardSidebar.jsx";
import { BounceLoader } from 'react-spinners';


function Dashboard() {

    const [isLoading, setIsLoading] = useState(true);
  const [showGlobalLoader, setShowGlobalLoader] = useState(true);

  useEffect(() => {
    // Simulate an API call or any other async operation
    setTimeout(() => {
      setIsLoading(false);
      setShowGlobalLoader(false); // Set to false after loading completes
    }, 1500);
  }, []);

    return (
        <>
      {showGlobalLoader && (
        <div className="w-full h-[100vh]">
          <BounceLoader color="#A3C8DB" className="spin" />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col md:flex-row bg-[#F0F5F7]">
          <DashboardSidebar />
          <Outlet />
        </div>
      )}
    </>

        
    );
}

export default Dashboard;