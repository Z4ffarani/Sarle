import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaSpotify } from "react-icons/fa"

import Logo from '../../public/logo-sarle.png'

export default function Footer() {
    const anoAtual = new Date().getFullYear()

    return (
        <div className="select-none absolute w-full flex justify-center md:justify-between px-20 items-center mt-10 h-[90px] bg-gradient-to-t from-designRed to-transparent">
            <img src={Logo} alt="Ícone do TRIO SAMPA" className="h-[60px] hidden lg:block"/>
            <h1 style={{ fontFamily: 'instrument' }} className="hidden md:block md:text-[15px] lg:text-[17px] lg:pl-[150px] text-white">Copyright © {anoAtual} SARLE • Todos os direitos reservados</h1>
            <div className="flex items-center gap-6">
                <a href="https://www.instagram.com/sarle_producoes/"><FaInstagram className="text-white cursor-pointer hover:scale-110 transition duration-200 text-[35px] active:scale-100"/></a>
                <a href="https://www.facebook.com/Sarleproducoes"><FaFacebook className="text-white cursor-pointer hover:scale-110 transition duration-200 text-[35px] active:scale-100"/></a>
                <a href="https://www.youtube.com/@sarleproducoes7611"><FaYoutube className="text-white cursor-pointer hover:scale-110 transition duration-200 text-[40px] active:scale-100"/></a>
                <a href="https://open.spotify.com/show/2IxBcwd96x6IMWN9rpT57A?si=19346d54214947e2"><FaSpotify className=" text-white cursor-pointer hover:scale-110 transition duration-200 text-[33px] active:scale-100"/></a>
            </div>
        </div>
    )
}