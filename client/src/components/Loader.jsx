import React from "react";

function Loader(){
    return(
        <div className="overlay flex items-center justify-center z-[100]">
            <div className="spinner"></div>
        </div>
    )
}

export default Loader