import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

function App() {

  let [isLoading, setIsLoading] = useState(true);

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
              <div className="flex flex-col bg-[#F0F5F7] h-[100vh]">
                <Navigation />
                <Outlet />
            </div>
            )}
        </>
    );
}

export default App
