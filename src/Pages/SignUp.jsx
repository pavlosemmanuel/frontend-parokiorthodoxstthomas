import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import LogoParokiComponent from "../components/Logo";
import ButtonComponent from "../components/ButtonComponent";
import {useNavigate} from "react-router-dom"
import axios from "axios";

const SignupComponent = () =>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const navigate = useNavigate()


    const handleSignUp = async (e) =>{
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:5000/api/users/signup', {username, email,password})
            console.log(res.data)
            navigate('/login')
        } catch (error) {
            console.error('Signup error:', error.response);
            setError(error.response?.data?.message || 'Something went wrong, please try again.');
             
        }
    }






    return(
        <>
        <div className="w-screen h-screen flex justify-center items-center font-poppins px-10">
            <div className="w-[400px] h-auto bg-gray-200 flex flex-col justify-center items-center rounded-2xl ">
                
                <div className="flex flex-col items-start gap-4 px-10 py-10 justify-center">

                    <LogoParokiComponent/>

                    <div className="flex flex-col gap-1">
                        <h2 className="text-[20px] font-bold md:text-[40px]">Buat akun baru</h2>
                        <p className="text-[13px] opacity-50 md:text-[18px]"> Lengkapi form dibawah dengan menggunakan data anda yang valid</p>
                       

                    </div>

                   

                        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                            <InputComponent 
                            idInput={"username"}  
                            nameInput={"username"} 
                            textLabel={"username"}
                            onChange={(e) => setUsername(e.target.value)}
                            inputValue={username}
                            
                            
                            />
                            <InputComponent 
                            idInput={"email"}  
                            nameInput={"email"} 
                            textLabel={"Email"}
                            onChange={(e) => setEmail(e.target.value)}
                            inputValue={email}/>


                            <InputComponent 
                            idInput={"Password"}  
                            nameInput={"Password"} 
                            textLabel={"Password"}
                            onChange={(e) => setPassword(e.target.value)}
                            inputValue={password}
                            type={"password"}/>

                           
                           <div className="flex flex-col gap-3 pt-4">
                             <ButtonComponent text={"Buat akun"} type={"submit"} />
                             <p className="text-center text-[13px] md:text-[16px]">Sudah punya akun?<a href="/login" className="font-bold text-red-500"> Masuk disini</a></p>
                           </div>

                            {error && <p className="text-red-500 text-center">{error}</p>}
                    

                           
                        </form>

                   

                </div>

            </div>
        </div>
        </>
    )


}

export default SignupComponent;