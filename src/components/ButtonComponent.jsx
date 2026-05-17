import React from "react";

const ButtonComponent = ({text, type, className}) =>{
    return(
        <>
            <button className={`px-6 py-4 bg-red-600 rounded-xl font-semibold"${className}`} type={type}>{text}</button>
        </>
    )
}

export default ButtonComponent