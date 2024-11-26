import Loader from "../components/Loader"
import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import Whatsapp from "../components/Whatsapp"

import Corporativo from '../data/corporativo.json'
import Moda from '../data/moda.json'
import Gastronomia from '../data/gastronomia.json'

import Video from '../../public/portfolio/background.mp4'

export default function Portfolio() {
    const [isLoading, setIsLoading] = useState(true)
    const [transition, setTransition] = useState(true)
    const { categoria } = useParams()
    const [content, setContent] = useState([])

    useEffect(() => {
        const timerLoading = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        const timerTransition = setTimeout(() => {
            setTransition(false)
        }, 1000)

        return () => {
            clearTimeout(timerLoading)
            clearTimeout(timerTransition)
        }
    }, [])

    useEffect(() => {
        if (categoria === 'corporativo') {
            setContent(Corporativo)
        } else if (categoria === 'moda') {
            setContent(Moda)
        } else if (categoria === 'gastronomia') {
            setContent(Gastronomia)
        } else {
            setContent([...Corporativo, ...Moda, ...Gastronomia])
        }
    }, [categoria])

    return (
        <div className='z-50 flex justify-center xl:mb-14 min-h-[100vh]'>
            <Whatsapp />

            <div className={`${isLoading ? 'fixed' : 'hidden'} z-50`}>
                <div className={`${transition ? 'opacity-100' : 'opacity-0'} transition duration-500 ease bg-[#050505] h-screen w-screen flex justify-center items-center`}>
                    <Loader />
                </div>
            </div>

            <video src={Video}
                autoPlay
                loop
                muted
                className="fixed w-full h-full object-cover opacity-15"
            />

            <div style={{ fontFamily: 'airbus' }} className="flex-col sm:flex-row flex text-white justify-center gap-5 sm:gap-10 p-5 absolute mt-[90px] sm:mt-[120px] text-[25px] w-full">
                <NavLink 
                    to="/portfólio/corporativo" 
                    className={({ isActive }) => 
                        `scale-95 hover:opacity-100 transition-all duration-300 ${isActive ? "opacity-100 sm:scale-105" : "opacity-50"}`
                    }
                >
                    CORPORATIVO
                </NavLink>
                <NavLink 
                    to="/portfólio/moda" 
                    className={({ isActive }) => 
                        `scale-95 hover:opacity-100 transition-all duration-300 ${isActive ? "opacity-100 sm:scale-105" : "opacity-50"}`
                    }
                >
                    MODA
                </NavLink>
                <NavLink 
                    to="/portfólio/gastronomia" 
                    className={({ isActive }) => 
                        `scale-95 hover:opacity-100 transition-all duration-300 ${isActive ? "opacity-100 sm:scale-105" : "opacity-50"}`
                    }
                >
                    GASTRONOMIA
                </NavLink>
            </div>

            <div className='pt-[300px] sm:pt-[230px] px-0 md:px-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-center select-none'>                
                {
                    content.map(info => (
                        <a key={info.id} href={info.link} className="active:scale-[97%] transition-all duration-300 ease">
                            <div className='z-10 border-[2px] border-designRed hover:border-white transition-all duration-300 ease max-w-[300px] md:max-w-[1000px] rounded-lg h-[200px] lg:h-[300px] m-4 flex flex-col justify-center items-center group'>
                                <div className='z-20 absolute text-center'>
                                    <h1 style={{ fontFamily: 'airbus' }} className='text-white text-[25px] md:text-[25px] lg:text-[40px] translate-y-[20px] group-hover:translate-y-[0px] transition duration-500 ease'>{info.title}</h1>
                                    <h2 style={{ fontFamily: 'instrument' }} className='text-white text-[17px] lg:text-[20px] opacity-0 group-hover:opacity-100 transition duration-300 ease'>{info.event}</h2>
                                </div>

                                <div className='flex overflow-hidden brightness-[40%] h-full rounded-md'>
                                    <img className='group-hover:scale-[120%] h-[100%] sm:h-[200%] xl:h-[300%] object-cover transition-all duration-1000 ease' src={info.image} alt={info.event} />
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
