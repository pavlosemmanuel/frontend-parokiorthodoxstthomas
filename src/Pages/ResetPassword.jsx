import React, { useState } from "react";
import LogoParokiComponent from "../components/Logo";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const ResetpasswordPages = () =>{

    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const {token} = useParams()

    const Navigate = useNavigate()


   const handleResetPassword = async (e) =>{
    e.preventDefault()
    setMessage('')
    setError('')

    if(password !== confirm){
        return setError('Passowrd tidak sesuai')
    }

    try {
        const res = await axios.post(`http://localhost:5000/api/users/reset-password/${token}`, {password})
        setMessage(res.data.message)
        setTimeout(()=> Navigate('/login'), 3000)

    } catch (error) {
         setError(error.response.data.message || "Gagal reset password")
    }
   }



    return(
        <>
        <div className="w-screen h-screen flex justify-center items-center font-poppins px-10">
            <div className="w-[400px] h-auto bg-gray-200 flex flex-col justify-center items-center rounded-2xl ">
                
                <div className="flex flex-col items-start gap-4 px-10 py-10 justify-center">

                    <LogoParokiComponent/>

                    <div className="flex flex-col gap-1">
                        <h2 className="text-[20px] font-bold md:text-[30px]">Buat Passowrd baru</h2>
                        
                    </div>

                   

                        <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
                           
                            <InputComponent 
                            idInput={"password"}  
                            nameInput={"password"} 
                            textLabel={"Password baru"}
                            onChange={(e) => setPassword(e.target.value)}
                            inputValue={password}/>

                              <InputComponent 
                            idInput={"password"}  
                            nameInput={"password"} 
                            textLabel={"Konfirmasi Password"}
                            onChange={(e) => setConfirm(e.target.value)}
                            inputValue={confirm}/>


                           

                           
                           <div className="flex flex-col gap-3 pt-4">
                             <ButtonComponent text={"Kirim"} type={"submit"} />
                           </div>

                          {message && <p className="text-green-600 mt-4 text-center">{message}</p>}
                            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                    

                           
                        </form>

                   

                </div>

            </div>
        </div>
        
        
        </>
    )
}


export default ResetpasswordPages;