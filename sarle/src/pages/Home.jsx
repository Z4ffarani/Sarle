import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Whatsapp from '../components/Whatsapp.jsx'
import { BiSolidLeftArrow } from "react-icons/bi"
import { BiSolidRightArrow } from "react-icons/bi"

import Logo from '../../public/logo-sarle.png'
import Corporativo from '../data/corporativo.json'
import Gastronomia from '../data/gastronomia.json'
import Moda from '../data/moda.json'

import Image from '../../public/home/sarle-background.png'
import VideoBackground from '../../public/home/sarle-background.mp4'
import Video from '../../public/home/somos-a-sarle.mp4'

export default function Home() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [scrolled, setScrolled] = useState(false)

    const categories = [Corporativo, Moda, Gastronomia]

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

    function sendEmail(e) {
        e.preventDefault();
    
        if (email === '' || message === '') {
            alert('Preencha todos os campos para enviar a mensagem.');
            return;
        }
    
        fetch("https://sarle.com.br/send_email.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                email: email,
                message: message
            })
        })
        .then(response => response.text())
        .catch(error => console.log("Erro:", error));

        alert("Mensagem enviada com sucesso!");
    }

    const [videoDepoimento, setVideoDepoimento] = useState(0)
    const Logos = [
        '../../../clientes/atlanta.png',
        '../../../clientes/agua-marinha.png',
        '../../../clientes/b4u.png',
        '../../../clientes/circuito-steam.png',
        '../../../clientes/shamah.png',
        '../../../clientes/base-spp-pisos.png',
        '../../../clientes/usebeyoo.png',
        '../../../clientes/zoom-propaganda.png',
    ]
    const Depoimentos = [
        'https://www.youtube.com/embed/3P8_2n6QwIU',
        'https://www.youtube.com/embed/BaUcksguNcM',
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

    return (
        <div className='min-h-[100vh]'>
            <Whatsapp />

            <img src={Image}
                className="z-[-999] fixed w-full h-full object-cover opacity-[30%]"
                alt = "background"
            />

            <div style={{ fontFamily: 'instrument ' }}>
                <div className='h-full'>
                    <div className="overflow-hidden border-b-2 border-designRed z-50">
                        <video src={VideoBackground}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover brightness-[40%]"
                        />

                        <div className='w-full flex flex-col justify-center items-center absolute mt-[-300px] lg:mt-[-380px] xl:mt-[-550px] 2xl:mt-[-650px]'>
                            <img src={Logo} alt="Logo" className={`transition duration-500 ease hidden lg:block sm:h-[200px] mt-[-50px] select-none ${scrolled ? 'translate-y-[-50px] opacity-0' : 'opacity-100'}`}/>
                            
                            <Link to='/sobre-nos' style={{ fontFamily: 'airbus' }}
                                className={`hidden lg:block md:mt-12 lg:mt-14 hover:bg-opacity-100 active:scale-[85%] backdrop-blur-md bg-opacity-50 bg-designRed scale-90 transition-all w-[260px] sm:w-[300px] duration-300 ease text-center text-white text-[23px] sm:text-[30px] py-[15px] rounded-full border-[3px] border-designRed hover:border-white ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
                                SOBRE NÓS
                            </Link>
                        </div>
                    </div>

                    <div className='flex-col flex justify-center items-center'>
                        <video src={Video}
                            autoPlay
                            loop
                            muted
                            className="m-5 w-[90%] lg:w-[70%] sm:mt-10 object-cover rounded-lg border-2 border-designRed z-30"
                        />
                        
                        <Link to='/sobre-nos' style={{ fontFamily: 'airbus' }}
                            className="md:hidden mt-5 hover:bg-opacity-100 active:scale-[85%] backdrop-blur-md bg-opacity-50 bg-designRed scale-90 transition-all w-[260px] sm:w-[350px] duration-300 ease text-center text-white text-[23px] sm:text-[30px] mx-6 py-[15px] rounded-full border-[3px] border-designRed hover:border-white">
                            SOBRE NÓS
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h2 style={{ fontFamily: 'airbus' }} className='py-12 sm:py-20 sm:pb-16 text-white text-center text-[28px] sm:text-[35px] md:text-[60px] opacity-40 text-wrap select-none'>NOSSOS CLIENTES</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center select-none'>
                        {
                            categories.flat().slice(0, 6).map(info => (
                                <>
                                    <Link to={`/portfolio/${info.category}/${info.title}`} key={info.id} className="hidden lg:block cursor-pointer group z-30">
                                        <div className="flex h-full justify-center items-center">
                                            <div className="absolute z-30 flex flex-col items-center gap-5 scale-[95%] group-hover:scale-100 transition duration-500 ease">
                                                <h1 style={{ fontFamily: 'airbus' }} className='text-white text-[25px] md:text-[25px] lg:text-[40px] opacity-0 mb-[-20px] group-hover:opacity-100 transition duration-500 ease'>{info.title}</h1>
                                                <h2 style={{ fontFamily: 'instrument' }} className='text-white text-[17px] lg:text-[20px] opacity-0 group-hover:opacity-100 transition duration-500 ease'>{info.event}</h2>
                                            </div>

                                            <img className="h-full opacity-100 group-hover:opacity-50 transition duration-300 ease" src={info.image}/>
                                        </div>
                                    </Link>

                                    <Link to={`/portfolio/${info.category}/${info.title}`} key={info.id} className="block lg:hidden cursor-pointer z-30">
                                        <div className="flex h-full justify-center items-center">
                                            <div className="absolute z-30 flex flex-col items-center gap-5 transition duration-500 ease">
                                                <h1 style={{ fontFamily: 'airbus' }} className='text-white text-[25px] md:text-[25px] lg:text-[40px] opacity-100'>{info.title}</h1>
                                            </div>

                                            <img className="h-full opacity-50" src={info.image}/>
                                        </div>
                                    </Link>
                                </>
                            ))
                        }
                    </div>

                    <Link to='/portfolio' style={{ fontFamily: 'airbus' }}
                        className="mt-10 sm:mt-16 hover:bg-opacity-100 active:scale-[85%] backdrop-blur-md bg-opacity-50 bg-designRed scale-90 transition-all w-[280px] sm:w-[380px] duration-300 ease text-center text-white text-[23px] sm:text-[30px] mx-10 py-[15px] rounded-full border-[3px] border-designRed hover:border-white">
                        VER PORTFÓLIO
                    </Link>

                    <div className='mx-5 my-[70px] sm:my-[100px] md:my-[130px] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-7 sm:gap-12 lg:gap-20'>
                        { 
                            Logos.map(logo => (
                                <img key={logo} src={logo} className='z-30 h-[100px] sm:h-[100px] sm:w-[100px] md:h-[160px] md:w-[160px] select-none' />
                            ))
                        }
                    </div>
                </div>

                <div style={{ fontFamily: 'instrument ' }} className="flex flex-col items-center z-40 sm:mb-10">
                    <div className='flex flex-col-reverse sm:flex-row sm:m-5 sm:gap-5'>
                        <div className="bg-designRed bg-opacity-25 backdrop-blur-md mt-10 sm:w-full sm:mt-0 p-5 mx-4 sm:mx-0 md:mr-5 rounded-lg shadow-lg border-[2px] border-designRed">
                            <h1 style={{ fontFamily: 'airbus' }} className="text-white text-center text-[25px] sm:text-[28px] mb-7 sm:mb-10">Entre em contato conosco!</h1>
                            <form onSubmit={sendEmail}>
                                <label className="text-white text-[20px]" htmlFor="email">E-mail:</label>
                                <br />
                                <input
                                    style={{ fontFamily: 'instrument' }}
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setMessage(e.target.value)} 
                                    value={message}
                                    required 
                                    className="bg-white mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-designRed" 
                                    rows="3"
                                />

                                <br />
                                <button style={{ fontFamily: 'airbus' }} className="bg-designRed scale-100 active:scale-[96%] text-white text-[20px] py-3 rounded-md transition w-full" type="submit">ENVIAR</button>
                            </form>
                        </div>

                        <div className='mx-[36px] sm:mx-[40px] flex items-center justify-center scale-[80%] sm:scale-[86%] md:scale-[95%]'>
                            <button className='z-50 text-white text-[40px] pt-[30px] transition-all duration-300 ease active:scale-90 active:text-designRed' onClick={handlePreviousDepoimento}><BiSolidLeftArrow /></button>

                            <iframe
                                className='rounded-md mt-10 sm:mt-0 shadow-lg border-[2px] border-designRed w-full h-[250px] sm:h-[390px] md:h-[323px] scale-[145%] md:scale-[140%]'
                                src={Depoimentos[videoDepoimento]}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />

                            <button className='z-50 text-white text-[40px] pt-[30px] transition-all duration-300 ease active:scale-90 active:text-designRed' onClick={handleNextDepoimento}><BiSolidRightArrow /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}