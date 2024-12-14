import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiMenuLine } from "react-icons/ri";
import { MdClose } from 'react-icons/md'

import Logo from '../../public/logo-sarle.png'

export default function Header() {
    const [menu, setMenu] = useState(false)
    const [rotate, setRotate] = useState('')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 1
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleOpenMenu = () => {
        setTimeout(() => {
            setRotate('rotate-90 scale-[110%]') 
        }, 1);
        setMenu(true)
    }

    const handleCloseMenu = () => {
        setTimeout(() => {
            setRotate('rotate-0')
        }, 1);
        setMenu(false)
    }

    return (
        <div className={`fixed z-[50] w-full ${scrolled ? 'bg-opacity-100' : 'bg-opacity-0'} bg-[#050505] transition-all duration-100 ease pb-8`}>
            <header className='flex items-center justify-between w-full pt-[28px] pl-[40px] transition duration-200 ease'>
                <div className='flex flex-row justify-center items-center w-full sm:ml-[30px] md:ml-[95px]'>
                    <img src={Logo} alt="Logo" className={`transition duration-500 ease hidden sm:block sm:h-[60px] select-none ${scrolled ? 'scale-100' : 'scale-125'}`}/>
                    <h1 style={{ fontFamily: 'airbus' }} className={`text-[18px] sm:text-[25px] md:text-[25px] pl-3 text-white font-light select-none transition-all duration-500 ease ${scrolled ? 'block' : 'sm:hidden'}`}>SARLE PRODUÇÕES</h1>
                </div>
            
                <Link to={'/contato'} style={{ fontFamily: 'instrument' }} className='hidden sm:block text-white px-5 py-[10px] border-2 rounded-full bg-transparent mr-5 text-[20px] hover:bg-designRed transition-all duration-300 ease active:scale-90 font-medium'>Contato</Link>
            </header>
    
            { menu ? 
                <button onClick={handleCloseMenu} className='z-50 absolute top-0 pl-5 pt-[20px] sm:pt-[33px]'>
                    <MdClose className={`${rotate} text-designRed text-[40px] sm:text-[50px] transform duration-500 ease`} />
                </button>
                :
                <button onClick={handleOpenMenu} className='z-50 absolute top-0 pl-5 pt-[20px] sm:pt-[33px]'>
                    <RiMenuLine className={`${rotate} text-white text-[40px] sm:text-[50px] scale-90 hover:scale-100 transform duration-500 ease`} />
                </button>
            }

            <nav style={{ fontFamily: 'airbus' }} className={`${menu ? 'translate-x-[0px]' : 'translate-x-[-1000px]'} transition-all duration-700 ease absolute z-10 bg-[#050505] text-[30px] 2xl:text-[35px] w-[100%] sm:w-[50%] md:w-[38%] lg:w-[30%] xl:w-[23%] 2xl:w-[23%] top-0 pt-[100px] h-screen flex flex-col pl-10 gap-[13px] font-medium text-white select-none`}>
                {['/', '/sobre nós', '/portfólio', '/contato'].map((path, index) => (
                    <Link
                        key={index}
                        onClick={handleCloseMenu}
                        to={path}
                        className="relative hover:text-designRed hover:translate-x-[10px] transition duration-300 ease"
                    >
                        {path.replace('/', '').toUpperCase() || 'HOME'}
                    </Link>
                ))}
            </nav>
        </div>
    )
}