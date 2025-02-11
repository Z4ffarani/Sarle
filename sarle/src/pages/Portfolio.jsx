import { useState, useEffect } from "react"
import { Link, NavLink, useParams } from "react-router-dom"
import Whatsapp from "../components/Whatsapp"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import Corporativo from '../data/corporativo.json'
import Moda from '../data/moda.json'
import Gastronomia from '../data/gastronomia.json'

export default function Portfolio() {
    const { categoria } = useParams()
    const [content, setContent] = useState([])

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
        <div className='z-0 mb-[-40px] min-h-[100vh]'>  
            <Whatsapp />

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

            <div className="pt-[300px] sm:pt-[220px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                    content.map(info => (
                        <Link to={`/portfólio/${info.category}/${info.title}`} key={info.id} className="cursor-pointer group z-30">
                            <div className="flex h-full justify-center items-center">
                                <div className="absolute z-30 flex flex-col items-center gap-5 scale-[95%] group-hover:scale-100 transition duration-500 ease">
                                    <h1 style={{ fontFamily: 'airbus' }} className='text-white text-[25px] md:text-[25px] lg:text-[40px] opacity-100 lg:opacity-0 mb-[-20px] lg:group-hover:opacity-100 transition duration-500 ease'>{info.title}</h1>
                                    <h2 style={{ fontFamily: 'instrument' }} className='text-white text-[17px] lg:text-[20px] opacity-0 lg:group-hover:opacity-100 transition duration-500 ease text-center'>{info.event}</h2>
                                </div>

                                <div className="h-full w-full opacity-50 lg:opacity-100 group-hover:opacity-50 transition duration-300 ease">
                                    <LazyLoadImage
                                        src={info.image}
                                        effect="blur"
                                        className="mb-[-6px]"
                                        threshold={10}
                                        delayMethod='throttle'
                                        delayTime={500}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}