import React from "react";

const InputComponent = ({ 
    textLabel, 
    idInput, 
    nameInput, 
    textPlacholder, 
    inputValue, 
    onChange, 
    accept,
    type = "text"   // ✅ default "text"
}) => {
    return (
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <label 
                htmlFor={idInput} 
                className="text-sm md:text-base w-full md:w-1/4"
            >
                {textLabel}
            </label>
            <input 
                type={type}   // ✅ pakai props
                id={idInput} 
                name={nameInput} 
                placeholder={textPlacholder} 
                className="px-4 py-2 rounded-full w-full md:w-3/4 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={inputValue}
                onChange={onChange}
                required 
                accept={accept}
            />
        </div>
    );
};

export default InputComponent;
