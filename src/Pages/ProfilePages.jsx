import React, { useEffect, useState } from "react";
import NavbarComponents from "../components/Navbar";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'
import axios from "axios";


const ProfilePages = () =>{
    const [userId, setUserId] = useState('')
    const [username, setUsername] = useState('')
    const Navigate = useNavigate()
    const [ isAdmin, setisAdmin] = useState('')


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            const decode = jwtDecode(token)
            setUsername(decode.username)
            setUserId(decode.userId)
            setisAdmin(decode.isAdmin == true)
        }
    }, [])


    const handleDelete  = async (e) =>
    {
        const confrim = window.confirm("Yakin ingin keluar?")
        if(!confrim) return

        try {
            await axios.delete(`http://localhost:5000/api/users/${userId}`)
            alert('berhasil menghapus akun')
            localStorage.removeItem('token')
            Navigate('/')
        } catch (error) {
             console.log(error)
             alert("gagal menghapus akun")
        }
    }
    return(
        <>

            <div>
                <NavbarComponents/>
            </div>

            <div className="w-screen h-screen flex justify-center items-center px-12 font-poppins">
                <div className="w-[300px] h-[200px] bg-gray-200 flex flex-col gap-6 justify-center items-center rounded-2xl">


                <div className=" flex items-center gap-2">
                    <div className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </div>

                    <h2 className="text-xl font-semibold">{username}</h2>
                    
                </div>

                <div className="flex justify-center items-center gap-2">
                   {!isAdmin && (
                     <button className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold" onClick={handleDelete}>Keluar</button>
                   )}
                    <button className="px-6 py-3 text-red-500 border-red-500 border-2  rounded-full font-semibold" ><a href="/">Home</a></button>
                </div>


                </div>

            </div>
        </>
    )
}

export default ProfilePages;