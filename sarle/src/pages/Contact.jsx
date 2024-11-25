import Loader from "../components/Loader"
import { useState, useEffect } from "react"
import Whatsapp from "../components/Whatsapp"

import Video from "../../public/contato/background.mp4"

export default function Contact() {
    const [isLoading, setIsLoading] = useState(true)
    const [transition, setTransition] = useState(true)
    const [videoDepoimento, setVideoDepoimento] = useState(0)
    const Depoimentos = [
        'https://www.youtube.com/embed/BaUcksguNcM',
        'https://www.youtube.com/embed/3P8_2n6QwIU',
        'https://www.youtube.com/embed/06imQmfnSa8',
        'https://www.youtube.com/embed/zP68uMv2Fj4',
        'https://www.youtube.com/embed/I9Ek_Ffk4ds'
    ]

    const handleNextDepoimento = () => { 
        setVideoDepoimento((prev) => (prev + 1) % Depoimentos.length)
        console.log()
    }

    const handlePreviousDepoimento = () => {
        setVideoDepoimento((prev) => (prev - 1 + Depoimentos.length) % Depoimentos.length)
    }

    useEffect(() => {
        const timerLoading = setTimeout(() => {
            setIsLoading(false)
        }, 1200)

        const timerTransition = setTimeout(() => {
            setTransition(false)
        }, 700)

        return () => {
            clearTimeout(timerLoading)
            clearTimeout(timerTransition)
        }
    }, [])

    return (
        <div className='z-50 flex flex-col gap-10 min-h-[100vh]'>
            <Whatsapp />

            <div className={`${isLoading ? 'fixed' : 'hidden'} z-50`}>
                <div className={`${transition ? 'opacity-100' : 'opacity-0'} transition duration-500 ease bg-[#050505] h-screen w-screen flex justify-center items-center`}>
                    <Loader />
                </div>
            </div>

            <video
                src={Video}
                autoPlay
                loop
                muted
                className="fixed w-full h-full object-cover opacity-10"
            />

            <div className="flex justify-center">
                <div style={{ fontFamily: 'instrument' }} className="z-40 pt-[40px] sm:pt-[105px] mt-12 3xl:w-[36.5%]">
                    <div className='flex flex-col-reverse sm:flex-row'>
                        <div className="bg-designRed bg-opacity-25 backdrop-blur-md mx-[17px] mt-10 sm:w-full sm:mt-0 p-5 rounded-lg shadow-lg border-[2px] border-designRed">
                            <h1 style={{ fontFamily: 'airbus' }} className="text-white text-center text-[25px] sm:text-[35px] mb-7 sm:mb-10">Entre em contato conosco!</h1>
                            <form action="/enviar" method="POST">
                                <label className="text-white text-[20px]" htmlFor="nome-contato">Representante:</label>
                                <br />
                                <input
                                    style={{ fontFamily: 'instrument' }}
                                    type="text" 
                                    id="nome-contato" 
                                    name="nome" 
                                    required 
                                    className="bg-white mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-designRed"
                                />
                                
                                <br />
                                
                                <label className="text-white text-[20px]" htmlFor="mensagem">Mensagem:</label>
                                <br />
                                <textarea
                                    style={{ fontFamily: 'instrument' }}
                                    id="mensagem" 
                                    name="mensagem" 
                                    required 
                                    className="bg-white mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-designRed" 
                                    rows="3"
                                />

                                <br />
                                <button style={{ fontFamily: 'airbus' }} className="bg-designRed scale-100 active:scale-[96%] text-white text-[20px] py-3 rounded-md transition w-full" type="submit">ENVIAR</button>
                            </form>
                        </div>

                        <div className="bg-designRed bg-opacity-25 backdrop-blur-md mx-[17px] sm:w-full mt-10 sm:mt-0 pt-5 rounded-lg shadow-lg border-[2px] border-designRed">
                            <h1 style={{ fontFamily: 'airbus' }} className="text-white text-center text-[25px] sm:text-[35px] mb-7 sm:mb-10">Depoimentos:</h1>

                            <div>
                                <button className='absolute text-white text-[40px] top-[282px] left-[10px] transition-all duration-300 ease active:scale-90 active:text-designRed' onClick={handlePreviousDepoimento}>◄</button>
                                <button className='absolute text-white text-[40px] top-[282px] left-[230px] sm:left-[230px] md:left-[285px] lg:left-[370px] transition-all duration-300 ease active:scale-90 active:text-designRed' onClick={handleNextDepoimento}>►</button>

                                <iframe
                                    className='w-full h-[400px] rounded-lg'
                                    src={Depoimentos[videoDepoimento]}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-5 z-10 flex justify-center sm:pt-12 overflow-hidden">
                <img className="brightness-[40%] hover:brightness-100 transition duration-700 ease w-[500px] sm:w-[960px] lg:h-[500px] rounded-lg" src="https://cdn.pixabay.com/photo/2023/01/18/13/09/camera-7726802_1280.jpg"/>
            </div>

            <div className="mx-5 z-10 hidden 2xl:flex justify-center overflow-hidden mb-[80px]">
                <img className="brightness-[40%] hover:brightness-100 transition duration-700 w-[500px] h-[460px] sm:w-[960px] rounded-lg" src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fHww"/>
            </div>
        </div>
    )
}
