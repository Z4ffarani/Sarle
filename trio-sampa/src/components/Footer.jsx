import { FaSpotify } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaSoundcloud } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="select-none absolute w-full flex justify-center md:justify-between px-20 items-center mt-10 h-[90px] bg-red-500">
            <img src="../../public/icon-trio-sampa.png" alt="Ícone do TRIO SAMPA" className="h-[70px] hidden lg:block"/>
            <h1 style={{ fontFamily: 'Instrumental Sans, sans-serif' }} className="hidden md:block md:text-[20px] lg:text-[25px] lg:pl-[140px] font-bold">SÃO PAULO TERRA DA GAROA</h1>
            <div className="flex items-center gap-5">
                <FaInstagram className="cursor-pointer hover:scale-110 transition duration-200 text-[35px]"/>
                <FaYoutube className="cursor-pointer hover:scale-110 transition duration-200 text-[40px]"/>
                <FaSpotify className="cursor-pointer hover:scale-110 transition duration-200 text-[33px]"/>
                <FaSoundcloud className="cursor-pointer hover:scale-110 transition duration-200 text-[40px]"/>
            </div>
        </div>
    )
}