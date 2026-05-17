import React, { useState } from "react";
import LogoParokiComponent from "../components/Logo";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPages = () =>{

    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState('')
    const [error, setError] = useState('')

    const Navigate = useNavigate()

    const handleLogin = async (e) =>{
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:5000/api/users/login", {email, password})
            localStorage.setItem('token', res.data.token)
            Navigate('/')
        } catch (error) {
            console.error('login error', error.res)
            setError(error.res?.data?.message || 'Invalid email or password')
            
        }
    }
    
    return(
        <>
         <div className="w-screen h-screen flex justify-center items-center font-poppins px-10">
            <div className="w-[400px] h-auto bg-gray-200 flex flex-col justify-center items-center rounded-2xl ">
                
                <div className="flex flex-col items-start gap-4 px-10 py-10 justify-center">

                    <LogoParokiComponent/>

                    <div className="flex flex-col gap-1">
                        <h2 className="text-[20px] font-bold md:text-[30px]">Hallo ketemu lagi!!!</h2>
                        <p className="text-[14px] opacity-50 md:text-[18px]"> Lengkapi form dibawah dengan menggunakan data anda yang valid</p>
                    </div>

                   

                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                            
                            <InputComponent 
                            idInput={"email"}  
                            nameInput={"email"} 
                            textLabel={"Email"}
                            onChange={(e) => setEmail(e.target.value)}
                            inputValue={email}
                            type={"email"}
                            />
                            
                            <div className="flex flex-col gap-2
                            ">
                                <InputComponent 
                                idInput={"Password"}  
                                nameInput={"Password"} 
                                textLabel={"Password"}
                                onChange={(e) => setPassword(e.target.value)}
                                inputValue={password}
                                type={"password"}/>
                                <a href="/forgotpassword" className="text-[12px] text-blue-800 font-semibold">lupa password</a>
                            </div>

                           
                           <div className="flex flex-col gap-3 pt-4">
                             <ButtonComponent text={"Masuk"} type={"submit"}/>
                             <p className="text-center text-[13px] md:text-[16px]">Belum punya akun?<a href="/signup" className="font-bold text-red-500"> Buat akun </a></p>
                             {error && <> <p className=" text-red-500 text-center mb-4">{error}</p></>}
                           </div>
                    

                           
                        </form>

                   

                </div>

            </div>
        </div>
        
        </>
    )
}

export default LoginPages;