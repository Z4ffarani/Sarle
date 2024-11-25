import Loader from '../components/Loader.jsx'
import { useContext, useEffect, useState } from 'react'
import { BooleanContext } from '../components/BooleanContext.jsx'
import { Link } from 'react-router-dom'
import Whatsapp from '../components/Whatsapp.jsx'

import Corporativo from '../data/corporativo.json'
import Image from '../../public/home/sarle-background.png'
import Video from '../../public/home/somos-a-sarle.mp4'

export default function Home() {
    const { toggleBoolean } = useContext(BooleanContext)
    const [isLoading, setIsLoading] = useState(true)
    const [transition, setTransition] = useState(true)
    const [videoDepoimento, setVideoDepoimento] = useState(0)
    const Logos = [
        '../../../clientes/b4u.png',
        '../../../clientes/maranatha-crossfit.png',
        '../../../clientes/sarel.png',
        '../../../clientes/shamah.png',
        '../../../clientes/souza-lima-gospel.png',
        '../../../clientes/usebeyoo.png',
        '../../../clientes/zoom-academy.png',
    ]
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
        <div className='min-h-[100vh]'>
            <Whatsapp />

            <div className={`${isLoading ? 'fixed' : 'hidden'} z-50`}>
                <div className={`${transition ? 'opacity-100' : 'opacity-0'} transition duration-500 ease bg-[#050505] h-screen w-screen flex justify-center items-center`}>
                    <Loader />
                </div>
            </div>

            <img src={Image}
                className="fixed w-full h-full object-cover opacity-[30%]"
                alt = "background"
            />

            <div style={{ fontFamily: 'instrument ' }}>
                <div className='h-full'>
                    <div className="overflow-hidden sm:mb-[370px] md:mb-[300px] lg:mb-0 sm:border-b-[2px] border-b-designRed">
                        <video src={Video}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover brightness-50"
                        />

                        <div className="flex flex-col-reverse sm:flex-col justify-center items-center sm:absolute lg:mt-[-450px]">
                            <div className="flex items-center justify-center pt-8 px-8 sm:w-[85%] lg:w-[60%]">
                                <p style={{ textShadow: 'black 0px 0px 10px' }} className="italic text-[18px] sm:text-[25px] text-white text-justify sm:text-center">
                                    "A Sarle é uma empresa apaixonada por transformar ideias em narrativas visuais cativantes, unindo criatividade, inovação e excelência para destacar marcas e inspirar conexões."
                                </p>
                            </div>

                            <Link to={'/biografia'} onClick={toggleBoolean} style={{ fontFamily: 'airbus' }}
                                className="mt-6 hover:bg-opacity-100 active:scale-[85%] backdrop-blur-md bg-opacity-50 bg-designRed scale-90 transition-all w-[260px] sm:w-[350px] duration-300 ease text-center text-white text-[23px] sm:text-[30px] mx-6 py-[15px] rounded-full border-[3px] border-designRed hover:border-white">
                                VER BIOGRAFIA
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='overflow-hidden w-full whitespace-nowrap'>
                        <h2 style={{ fontFamily: 'airbus' }} className='py-10 sm:pb-16 text-white text-center text-[28px] sm:text-[35px] md:text-[60px] opacity-40 text-wrap px-5'>CLIENTES QUE TRABALHAMOS</h2>
                    </div>

                    <div className='px-0 md:px-16 grid grid-cols-1 sm:grid-cols-2 justify-center select-none'>
                        {
                            Corporativo.slice(0, 6).map(info => (
                                <a key={info.id} href={info.link} className="active:scale-[97%] transition-all duration-300 ease">
                                    <div className='z-10 border-[2px] border-designRed hover:border-white transition-all duration-300 ease max-w-[300px] md:max-w-[1000px] rounded-lg h-[200px] lg:h-[300px] m-4 flex flex-col justify-center items-center group'>
                                        <div className='z-20 absolute text-center'>
                                            <h1 style={{ fontFamily: 'airbus' }} className='text-white text-[25px] md:text-[25px] lg:text-[40px] translate-y-[20px] group-hover:translate-y-[0px] transition duration-500 ease'>{info.title}</h1>
                                            <h2 style={{ fontFamily: 'instrument ' }} className='text-white text-[17px] lg:text-[20px] opacity-0 group-hover:opacity-100 transition duration-300 ease'>{info.event}</h2>
                                        </div>

                                        <div className='flex overflow-hidden brightness-[40%] h-full rounded-md'>
                                            <img className='group-hover:scale-[120%] h-[100%] sm:h-[200%] xl:h-[300%] object-cover transition-all duration-1000 ease' src={info.image} alt={info.event} />
                                        </div>
                                    </div>
                                </a>
                            ))
                        }
                    </div>

                    <div className='overflow-hidden w-full whitespace-nowrap flex gap-[50px] sm:gap-[100px] my-8'>
                        { Logos.map(logo => (
                                <img key={logo} src={logo} className='h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] inline-block animate-outdoor select-none' />
                            ))
                        }
                    </div>

                    <Link to={'/portfólio'} onClick={toggleBoolean} style={{ fontFamily: 'airbus' }}
                        className="mt-6 hover:bg-opacity-100 active:scale-[85%] backdrop-blur-md bg-opacity-50 bg-designRed scale-90 transition-all w-[280px] sm:w-[380px] duration-300 ease text-center text-white text-[23px] sm:text-[30px] mx-10 py-[15px] rounded-full border-[3px] border-designRed hover:border-white">
                        VER PORTFÓLIO
                    </Link>
                </div>

                <div style={{ fontFamily: 'instrument ' }} className="flex flex-col items-center z-40 sm:mb-10">
                    <div className='overflow-hidden w-full whitespace-nowrap'>
                        <h2 style={{ fontFamily: 'airbus' }} className='pt-10 pb-4 sm:py-16 text-white text-center text-[33px] md:text-[45px] lg:text-[60px] opacity-40 text-wrap px-5'>É MAIS QUE UM REGISTRO</h2>
                    </div>

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
        </div>
    )
}