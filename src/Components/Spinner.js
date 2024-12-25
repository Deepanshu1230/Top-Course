import React from "react";
import "./Spinner.css";


const Spinner=()=>{
    return(
        <div className="flex flex-col items-center justify-center space-y-2 font-bold text-3xl">
            <div className="spinner"></div>
            <p className="text-bgDark">Loading...</p>
        </div>
    );
};

export default Spinner;