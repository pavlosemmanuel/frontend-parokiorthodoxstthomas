import React, { useState } from "react";
import LogoParokiComponent from "../components/Logo";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import axios from "axios";
const ForgotpasswordPages = () =>{

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [ status, setStatus] = useState('')

    const handleEmail = async (e) =>{
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:5000/api/users/forgot-password", {email})
            setStatus(res.data.message)
        } catch (error) {
            console.error(error)
            setError(error.res?.data?.message) || "something went wrong"
            
        }
    }
    return(

        <>
        <div className="w-screen h-screen flex justify-center items-center font-poppins px-10">
            <div className="w-[400px] h-auto bg-gray-200 flex flex-col justify-center items-center rounded-2xl ">
                
                <div className="flex flex-col items-start gap-4 px-10 py-10 justify-center">

                    <LogoParokiComponent/>

                    <div className="flex flex-col gap-1">
                        <h2 className="text-[20px] font-bold md:text-[30px]">Konfirmasi Email</h2>
                        <p className="text-[13px] opacity-50 md:text-[18px]"> isi email untuk mendapatkan notifikasi</p>
                    </div>

                   

                        <form onSubmit={handleEmail} className="flex flex-col gap-4">
                           
                            <InputComponent 
                            idInput={"email"}  
                            nameInput={"email"} 
                            textLabel={"Email"}
                            onChange={(e) => setEmail(e.target.value)}
                            inputValue={email}/>


                           

                           
                           <div className="flex flex-col gap-3 pt-4">
                             <ButtonComponent text={"Kirim"} type={"submit"} />
                           </div>

                          {status && <p className="text-green-600 mt-4 text-center">{status}</p>}
                            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                    

                           
                        </form>

                   

                </div>

            </div>
        </div>
        
        </>
    )
}

export default ForgotpasswordPages