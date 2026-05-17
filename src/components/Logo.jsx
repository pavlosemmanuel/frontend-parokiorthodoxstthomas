import React from "react";
import LogoParoki from "../assets/ParokiLogo.png"

const LogoParokiComponent = ({classNameText}) =>{
    return(
        <>
         <div className="flex items-center gap-2 md:gap-4">
            <img src={LogoParoki} alt="" className="w-[40px] md:w-[80px]" />
            <h2 className={`text-[12px] font-semibold md:text-[16px] ${classNameText}`}>Gereja Orthodox Russia <span className="block">St Thomas Jakarta</span></h2>
        </div>
        </>
    )
}


export default LogoParokiComponent