import React from "react";

const Button = ({name, style}) => {
    return(
            <button className={`bg-secondary text-white py-[.7rem] px-[1.3rem] rounded-[30px] font-medium ${style}`}>
                {name}
            </button>
    )
}

export default Button;