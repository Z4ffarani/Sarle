import { FaWhatsapp } from 'react-icons/fa'

export default function Whatsapp() {
    return (
        <a href="https://api.whatsapp.com/send?phone=5511975440070" target="_blank" rel="noreferrer">
            <div className='z-50 rounded-full p-3 bg-green-500 bg-opacity-[70%] fixed right-7 bottom-16 hover:bg-opacity-100 active:scale-90 transition-all duration-300'>
                <FaWhatsapp className="text-white text-[45px] cursor-pointer"/>
            </div>
        </a>
    )
}