import { useContext, useState, useEffect } from 'react'
import { BooleanContext } from './BooleanContext.jsx'
import { Link } from 'react-router-dom'
import { RiMenu2Fill } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'

import Logo from '../../public/trio-sampa.png'

export default function Header() {
    const { valueBoolean, toggleBoolean } = useContext(BooleanContext);
    const [menu, setMenu] = useState(false)
    const [rotate, setRotate] = useState('')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 1;
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
            <header className='flex items-center justify-center pt-[28px] pl-[40px] sm:pl-0'>
                <img src={Logo} alt="Logo" className={`${valueBoolean ? 'opacity-0' : 'opacity-100'} transition duration-500 ease h-[25px] sm:h-[45px] select-none`}/>
            </header>

            { menu ? 
                <button onClick={handleCloseMenu} className='z-50 absolute top-0 pl-5 pt-[20px] sm:pt-[25px]'>
                    <MdClose className={`${rotate} text-red-500 text-[40px] sm:text-[50px] transform duration-500 ease`} />
                </button>
                :
                <button onClick={handleOpenMenu} className='z-50 absolute top-0 pl-5 pt-[20px] sm:pt-[25px]'>
                    <RiMenu2Fill className={`${rotate} text-white text-[40px] sm:text-[50px] scale-90 hover:scale-100 transform duration-500 ease`} />
                </button>
            }

            <nav style={{ fontFamily: 'Instrument Sans, sans-serif' }} className={`${menu ? 'translate-x-[0px]' : 'translate-x-[-1000px]'} transition-all duration-700 ease absolute z-10 bg-[#050505] text-[30px] 2xl:text-[35px] w-[100%] sm:w-[50%] md:w-[38%] lg:w-[30%] xl:w-[23%] 2xl:w-[23%] top-0 pt-[100px] h-screen flex flex-col pl-10 gap-[13px] font-medium text-white select-none`}>
                {['/', '/biografia', '/discografia', '/galeria', '/contato'].map((path, index) => (
                    <Link
                        key={index}
                        onClick={() => {handleCloseMenu(); toggleBoolean()}}
                        to={path}
                        className="relative hover:text-red-500 hover:translate-x-[10px] transition duration-300 ease"
                    >
                        {path.replace('/', '').toUpperCase() || 'HOME'}
                    </Link>
                ))}
            </nav>
        </div>
    )
}