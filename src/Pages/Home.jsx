import React from "react";
import NavbarComponents from "../components/Navbar";
import FooterComponent from "../components/Footer";
import ParokiImages from "../assets/ParokiImages.jpeg"
import ParokiImages2 from "../assets/ParokiImages2.jpeg"
import ParokiImages3 from "../assets/gambarParoki3.png"
import PathriachKirill from "../assets/patriakKirill.jpg"
import MetropolitanSergiy from "../assets/MetropolitanSergiy.jpg"
import BishopPitirim from "../assets/BishopPitirim.jpeg"
import FatherBoris from "../assets/RomoBoris.jpg"
import CardComponent from "../components/CardComponent";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const HomePages = () =>{
    const [latesLiturgy, newLiturgy] = useState(null)
    const [eventJadwal, setEventJadwal]  = useState(null)

    const fetchLatesLiturgy  = async ( ) =>{
        try {
            const res = await axios.get('http://localhost:5000/upload?sort=-date&limit=1')
            if(res.data.length > 0) {
                newLiturgy(res.data[0])
            }
        } catch (error) {
            console.error(" Error fetching latest liturgy", error);
        }
    }
    
    
    const fetchEventJadwal  = async ( ) =>{
        try {
            const res = await axios.get("http://localhost:5000/api/events?sofr=-date&limit=1")
            if(res.data.length > 0) {
                setEventJadwal(res.data[0])
            }
        } catch (error) {
            console.error(" Error fetching latest event", error);
            
        }  
    }
    
    useEffect(()=>{
        fetchLatesLiturgy()
        fetchEventJadwal()
    }, [])

  
    return(
        <>
        <div className="w-[100%] fixed bg-white z-[21]">
            <NavbarComponents/>
        </div>

        <div className="font-poppins scroll-smooth">
            <div className="flex flex-col justify-center items-center pt-[100px] gap-2 md:gap-2 md:pt-[180px]">

              <div className="w-[305px] h-[180px] bg-center bg-cover rounded-xl md:w-[1200px] md:h-[500px]" style={{backgroundImage: `url(${ParokiImages})`}}>

              </div>

                <div className="absolute left-2 top-[180px] md:left-[100px] md:top-[480px]">
                    <div className=" w-[100px] h-[100px] bg-white rounded-[10px] shadow-[8px_8px_15px_6px_rgba(0,_0,_0,_0.1)] flex justify-center items-center px-2 md:w-[200px] md:h-[200px] md:rounded-2xl">
                        <div className="w-[80px] h-[80px] bg-center bg-cover rounded-[10px] md:w-[160px] md:h-[160px]" style={{ backgroundImage:`url(${ParokiImages2})`}}></div>
                    </div>
                </div>



                <div className="absolute right-1 top-[120px] md:right-[100px] md:top-[200px]">
                    <div className=" w-[115px] h-[150px] md:w-[220px] md:h-[270px] bg-white rounded-[10px] md:rounded-2xl shadow-[8px_8px_15px_6px_rgba(0,_0,_0,_0.1)] flex flex-col gap-2
                     px-2 py-2 md:py-5 md:px-3">

                        <h2 className="text-[10px] font-semibold text-[#BFA142] md:text-xl">Church Hyrarkie</h2>

                        <div className="flex items-center gap-2">
                            <div className="w-[20px] h-[20px] bg-red-500 rounded-full md:w-[40px] md:h-[40px] bg-center bg-cover" style={{backgroundImage: `url(${PathriachKirill})`}}></div>

                            <h2 className="text-[8px] md:text-[16px]">Pathriach Kirill</h2>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-[20px] h-[20px] bg-red-500 rounded-full md:w-[40px] md:h-[40px] bg-center bg-cover" style={{backgroundImage: `url(${MetropolitanSergiy})`}}></div>

                            <h2 className="text-[8px] md:text-[16px]">Metropolitan Sergiy</h2>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-[20px] h-[20px] bg-red-500 rounded-full md:w-[40px] md:h-[40px] bg-center bg-cover" style={{backgroundImage: `url(${BishopPitirim})`}}></div>

                            <h2 className="text-[8px] md:text-[16px]">Bishop Pitirim</h2>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-[20px] h-[20px] bg-red-500 rounded-full md:w-[40px] md:h-[40px] bg-center bg-cover" style={{backgroundImage: `url(${FatherBoris})`}}></div>

                            <h2 className="text-[8px] md:text-[16px]">Father Boris</h2>
                        </div>


                         
                    </div>
                </div>


                <div className="mt-[20px] px-10 text-center flex flex-col gap-2 md:mt-[60px] md:gap-8 ">
                    <h2 className="text-center text-xl font-semibold md:text-[60px]">Selamat datang di web <span className="block font-bold text-[#BFA142] text-[24px] md:text-[80px] md:pt-[60px]">Paroki St Thomas Jakarta</span></h2>


                    <p className="text-[12px] opacity-50 font-medium md:text-xl md:pt-2">Ini adalah halaman resmi dari Gereja orthodox St Thomas Jakarta  <span className="md:block"> dibawah naungan Pathriarch Moskow dipimpin oleh Romo Boris selaku lektor Paroki</span></p>


                    <div className="flex justify-center items-center gap-2 font-semibold md:gap-4">
                        <button className="px-6 py-3 bg-[#BFA142] text-[10px] text-white rounded-full md:px-10 md:py-4 md:text-[16px]">Tentang Kami</button>

                        <button className="px-6 py-3 border-2 border-[#BFA142] text-[10px] text-[#BFA142] rounded-full md:px-10 md:py-4 md:text-[16px]">Jadwal Liturgi</button>
                    </div>
                </div>





                {/* About */}
                <div className=" flex flex-col gap-2 justify-center items-center mt-4 md:mt-10 md:gap-4">
                    <div className="text-center">
                        <p className="text-[8px] md:text-[16px] text-[#BFA142]">Tentang kami</p>
                        <p className="text-xl font-semibold md:text-[24px] md:flex">Gereja Orthodox <span className="block ">Rusia St. Thomas Jakarta</span></p>
                    </div>


                    <div className="px-10 text-center text-[12px] flex flex-col gap-4 md:text-[20px] md:px-52 opacity-50">
                        <p>Gereja Orthodox Rusia St. Thomas adalah komunitas umat Kristen Orthodox di Jakarta di bawah Patriarkat Moskow. Gereja ini didedikasikan kepada Santo Rasul Tomas, pelindung kami, dan hadir sebagai tempat doa, liturgi suci, serta pembinaan iman.</p>

                        <p>
                            Kami terbuka bagi siapa saja yang ingin mengenal tradisi Gereja Orthodox, merasakan keindahan ibadah kuno, dan bertumbuh dalam kasih Kristus.
                            Mari datang beribadah bersama kami dan mengalami damai sejahtera Tuhan di tengah komunitas kami.
                        </p>

                    </div>

                    <div className="w-[300px] h-[100px] bg-center bg-cover md:w-[800px] md:h-[400px]" style={{backgroundImage: `url(${ParokiImages3})`}}>

                    </div>
                </div>


                {/* Jadwal Paroki */}

                <div className="flex flex-col gap-2  mt-8">
                    <div className="text-center text-[8px] text-[#BFA142] ">
                        <p className="md:text-[16px]">Jadwal & Event Paroki</p>
                    </div>
                    <div className="flex justify-center items-center gap-4  px-10">

                    {latesLiturgy ? (
                        <CardComponent
                        imageUrl={latesLiturgy.imageUrl}
                        name={latesLiturgy.name}
                        date={new Date(latesLiturgy.date).toLocaleDateString("id-ID")}
                        time={latesLiturgy.time}
                        location={latesLiturgy.location}
                        isAdmin={false}
                        />

                        
                    ): (
                        <>
                            <p className="text-red-500">Tidak ada jadwal & event terbaru</p>
                        </>
                    )}

                    {eventJadwal ? (
                        <CardComponent
                        imageUrl={eventJadwal.imageUrl}
                        name={eventJadwal.name}
                        date={new Date(eventJadwal.date).toLocaleDateString("id-ID")}
                        time={eventJadwal.time}
                        location={eventJadwal.location}
                        isAdmin={false}
                        />

                        
                    ): (
                        <>
                           
                        </>
                    )}


                    
                    



                    </div>
                </div>
               
                



                {/* FAQ */}
                <div>
                    
                </div>


                {/* Footer */}
                <FooterComponent/>

            </div>
        </div>
        
        </>
    )
}

export default HomePages