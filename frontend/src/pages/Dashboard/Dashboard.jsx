import React, { useEffect, useState } from 'react';
import {Outlet} from "react-router-dom";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar/DashboardSidebar.jsx";
import { BounceLoader } from 'react-spinners';


function Dashboard() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="w-full h-[100vh]">
                    <BounceLoader color="#A3C8DB" className="spin" />
                </div>
            ) : (
                <div className="flex flex-col md:flex-row bg-[#F0F5F7] w-[100%]">
                    <DashboardSidebar />
                    <Outlet />
                </div>
            )}
        </>

        
    );
}

export default Dashboard;