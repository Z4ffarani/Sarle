import Loader from '../components/Loader.jsx'
import { useContext, useEffect, useState } from 'react'
import { BooleanContext } from '../components/BooleanContext.jsx'
import { Link } from 'react-router-dom'
import Songs from '../data/songs.json'

import Video from '../../public/home-background.mp4'

export default function Home() {
    const { toggleBoolean } = useContext(BooleanContext)
    const [isLoading, setIsLoading] = useState(true)
    const [transition, setTransition] = useState(true)

    useEffect(() => {
        toggleBoolean()

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
        <div>
            <div className={`${isLoading ? 'fixed' : 'hidden'} z-50`}>
                <div className={`${transition ? 'opacity-100' : 'opacity-0'} transition duration-500 ease bg-[#050505] h-screen w-screen flex justify-center items-center`}>
                    <Loader />
                </div>
            </div>

            <video src={Video}
                autoPlay
                loop
                muted
                className="fixed w-full h-full object-cover opacity-[3%]"
            />

            <div style={{ fontFamily: 'Instrumental Sans, sans-serif' }}>
                <div className='h-full'>
                    <div className="overflow-hidden sm:mb-[370px] md:mb-[300px] lg:mb-0 sm:border-b-[2px] border-b-red-500">
                        <img
                            src="https://gracedrumsschool.com/wp-content/uploads/slider/cache/a114be37266eff5617584d98b600557c/drums8.jpg"
                            className="w-full sm:scale-[250%] lg:scale-[100%] brightness-[40%]"
                            alt='Imagem de instrumentos organizados sob grama sintética e com paisagem natural atrás.'
                        />

                        <div className="flex flex-col-reverse sm:flex-col justify-center items-center sm:absolute lg:mt-[-450px]">
                            <div className="flex items-center justify-center pt-8 px-8 sm:w-[85%] lg:w-[60%]">
                                <p style={{ textShadow: 'black 0px 0px 10px' }} className="italic text-[18px] sm:text-[25px] text-white text-justify sm:text-center">
                                    "TRIO SAMPA é formado por três músicos com uma longa trajetória e experiência em diversos gêneros. O Trio Sampa cria um som original, interpretando de forma única e acústica clássicos da MPB, Jazz, Bossa Nova, Samba e Pop."
                                </p>
                            </div>

                            <Link to={'/biografia'} onClick={toggleBoolean}
                                className="mt-6 hover:bg-opacity-100 active:scale-[85%] backdrop-blur-md bg-opacity-50 bg-red-500 scale-90 transition-all w-[260px] sm:w-[350px] duration-300 ease font-bold text-center text-white text-[23px] sm:text-[30px] mx-6 py-[15px] rounded-full border-[3px] border-red-500">
                                VER BIOGRAFIA
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='overflow-hidden w-full whitespace-nowrap'>
                        <h2 className='inline-block animate-outdoor py-10 sm:py-16 text-red-500 text-center text-[30px] sm:text-[60px] font-bold'>PARTICIPAÇÕES EXCLUSIVAS EM EVENTOS</h2>
                    </div>

                    <div className='px-0 md:px-16 grid grid-cols-1 sm:grid-cols-2 justify-center select-none'>
                        {
                            Songs.slice(0, 4).map(song => (
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

                    <Link to={'/discografia'} onClick={toggleBoolean}
                        className="mt-6 hover:bg-opacity-100 active:scale-[85%] backdrop-blur-md bg-opacity-50 bg-red-500 scale-90 transition-all w-[280px] sm:w-[380px] duration-300 ease font-bold text-center text-white text-[23px] sm:text-[30px] mx-10 py-[15px] rounded-full border-[3px] border-red-500">
                        VER DISCOGRAFIA
                    </Link>
                </div>

                <div style={{ fontFamily: 'Instrumental Sans, sans-serif' }} className="flex flex-col items-center z-40 sm:mb-10">
                    <div className='overflow-hidden w-full whitespace-nowrap'>
                        <h2 className='inline-block animate-outdoor pt-10 pb-4 sm:py-16 text-red-500 text-center text-[30px] sm:text-[60px] font-bold'>INSCREVA-SE E ENTRE EM CONTATO CONOSCO</h2>
                    </div>

                    <div className="bg-red-500 bg-opacity-25 scale-90 sm:scale-100 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-lg border-[2px] border-red-500">
                        <form action="/inscrever" method="POST">
                            <h1 className="text-white text-center text-[22px] sm:text-[30px] font-bold mb-4 py-4">Inscreva-se para receber mais novidades!</h1>

                            <label className="text-white text-[20px]" htmlFor="nome-inscricao">Nome:</label>
                            <br />
                            <input 
                                type="text" 
                                id="nome-inscricao" 
                                name="nome" 
                                required 
                                className="bg-white mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            
                            <br />
                            
                            <label className="text-white text-[20px]" htmlFor="email-inscricao">E-mail:</label>
                            <br />
                            <input 
                                type="email" 
                                id="email-inscricao" 
                                name="email" 
                                required 
                                className="bg-white mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            
                            <br />
                            <button className="bg-red-500 scale-100 active:scale-[96%] text-white text-[20px] font-semibold py-3 rounded-md transition w-full" type="submit">INSCREVER</button>
                        </form>

                        <h2 className="text-white italic text-[13px] sm:text-[15px] text-center pt-10">Seus dados serão utilizados exclusivamente para o envio de informações e novidades relacionadas ao grupo TRIO SAMPA.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}