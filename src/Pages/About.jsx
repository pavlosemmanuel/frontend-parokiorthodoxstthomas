import React from "react";
import NavbarComponents from "../components/Navbar";
import FooterComponent from "../components/Footer";
import gambarParoki3 from "../assets/gambarParoki3.png"

const AboutPages = () =>{
    return(
        <>
        <div className="w-[100%] fixed bg-white z-[21]">
            <NavbarComponents/>
        </div>

        <div className="font-poppins px-10 py-10 text-center flex flex-col gap-4 pt-[100px] md:pt-[140px]">
            
            <h2 className="text-[20px] font-semibold md:text-[40px]">Tentang Paroki</h2>

            <div className="text-[12px] flex flex-col gap-4
             md:px-20 md:text-[24px]">
                <p >Selamat datang di <span className=" text-[#BFA142] font-bold">Gereja Orthodox Rusia St. Thomas Jakarta,</span> sebuah paroki Gereja Orthodox yang berada di bawah <span className=" text-[#BFA142] font-bold">yurisdiksi Patriarkat Moskow.</span> Gereja ini didedikasikan kepada Santo Rasul Thomas, salah satu murid Kristus yang penuh iman dan keberanian dalam mewartakan Injil hingga ke ujung dunia. Santo Thomas juga dikenal sebagai pelindung komunitas kami di Indonesia, yang hidup dalam iman dan pengharapan di tengah masyarakat yang beragam.</p>

                <p >
                    Sebagai bagian dari Gereja Orthodox yang telah berdiri sejak zaman para Rasul, kami berkomitmen untuk menjaga kemurnian ajaran iman Kristen seperti yang diwariskan oleh Kristus kepada para murid-Nya dan diteruskan oleh para Bapa Gereja. Gereja Orthodox adalah Gereja kuno yang tetap setia pada Tradisi Suci dan Liturgi Ilahi yang kaya makna dan keindahan rohani.
                </p>

                <p >

                    Di Gereja St. Thomas Jakarta, <span className=" text-[#BFA142] font-bold">kami berusaha menjadi rumah doa bagi semua orang yang rindu mendekat kepada Tuhan dan mengalami kasih-Nya yang tak berkesudahan.</span> Kami terbuka bagi siapa saja — baik Orthodox, non-Orthodox, maupun mereka yang baru mengenal iman Kristen — untuk datang, beribadah bersama, dan belajar mengenal Kristus lebih dalam.
                </p>

                <p >
                    Liturgi Ilahi kami dilaksanakan secara berkala dengan suasana khidmat, penuh kidung pujian, dan diiringi keharuman dupa yang melambangkan doa umat yang naik ke hadapan Tuhan. Semua ini membantu umat memasuki misteri kasih Allah yang nyata di dalam sakramen-sakramen Gereja.
                    Kami juga aktif dalam membina umat melalui kegiatan rohani, pendidikan iman, serta pelayanan kasih bagi masyarakat sekitar. Kami percaya bahwa Gereja bukan hanya tempat berdoa, tetapi juga komunitas yang hidup
                </p>

                <p >
                    Melalui keberadaan kami di Jakarta, kami berharap dapat ikut serta dalam perkembangan Gereja Orthodox di Indonesia dan menjadi saksi kebenaran Injil dengan rendah hati dan penuh kasih.
                    “Segala sesuatu yang bernafas, pujilah Tuhan!” (Mazmur 150:6)
                </p>

                <img src={gambarParoki3} alt="" />

            </div>


            

        </div>
        <footer className="w-full z-[21]">
        <FooterComponent />
      </footer>
        </>
    )
}

export default AboutPages