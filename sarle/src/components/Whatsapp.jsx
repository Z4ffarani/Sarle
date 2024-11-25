import { FaWhatsapp } from 'react-icons/fa'

export default function Whatsapp() {
    return (
        <a href="https://api.whatsapp.com/send?phone=5511973786529" target="_blank" rel="noreferrer">
            <div className='z-50 rounded-full p-4 bg-green-500 bg-opacity-50 fixed right-7 bottom-16 hover:bg-opacity-100 active:scale-90 transition-all duration-300'>
                <FaWhatsapp className="text-white text-[50px] cursor-pointer"/>
            </div>
        </a>
    )
}