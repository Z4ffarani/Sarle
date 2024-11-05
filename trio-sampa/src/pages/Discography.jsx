import Loader from "../components/Loader"
import { useState, useEffect } from "react"
import Songs from '../data/songs.json'

export default function Discography() {
    const [isLoading, setIsLoading] = useState(true)
    const [transition, setTransition] = useState(true)

    useEffect(() => {
        const timerLoading = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        const timerTransition = setTimeout(() => {
            setTransition(false)
        }, 500)

        return () => {
            clearTimeout(timerLoading)
            clearTimeout(timerTransition)
        }
    }, [])

    return (
        <div className='z-50 flex justify-center xl:mb-14'>
            <div className={`${isLoading ? 'fixed' : 'hidden'} z-50`}>
                <div className={`${transition ? 'opacity-100' : 'opacity-0'} transition duration-500 ease bg-[#050505] h-screen w-screen flex justify-center items-center`}>
                    <Loader />
                </div>
            </div>

            <video src="../../public/discography-background.mp4"
                autoPlay
                loop
                muted
                className="fixed w-full h-full object-cover opacity-10"
            />

            <div className='pt-[80px] sm:pt-[105px] px-0 md:px-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-center select-none'>
                {
                    Songs.map(song => (
                        <div key={song.id} className='z-10 cursor-pointer border-[2px] border-red-500 max-w-[300px] md:max-w-[1000px] rounded-lg h-[200px] lg:h-[300px] m-4 flex flex-col justify-center items-center group'>
                            <div className='z-20 absolute text-center'>
                                <h1 style={{ fontFamily: 'Instrumental Sans, sans-serif' }} className='text-white text-[25px] md:text-[25px] lg:text-[40px] font-bold translate-y-[20px] group-hover:translate-y-[0px] transition duration-500 ease'>{song.title}</h1>
                                <h2 style={{ fontFamily: 'Instrumental Sans, sans-serif' }} className='text-white text-[17px] lg:text-[20px] opacity-0 group-hover:opacity-100 transition duration-300 ease'>{song.event} • <span className='font-bold'>{song.data}</span></h2>
                            </div>

                            <div className='flex overflow-hidden brightness-[40%] h-full rounded-md'>
                                <img className='group-hover:scale-[120%] h-[100%] sm:h-[200%] xl:h-[300%] object-cover transition-all duration-1000 ease' src={song.image} alt={song.event} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}