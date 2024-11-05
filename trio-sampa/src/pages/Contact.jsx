import Loader from "../components/Loader"
import { useState, useEffect } from "react"

export default function Contact() {
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
        <div className='z-50 flex flex-col gap-10'>
            <div className={`${isLoading ? 'fixed' : 'hidden'} z-50`}>
                <div className={`${transition ? 'opacity-100' : 'opacity-0'} transition duration-500 ease bg-[#050505] h-screen w-screen flex justify-center items-center`}>
                    <Loader />
                </div>
            </div>

            <video
                src="../../public/contact-background.mp4"
                autoPlay
                loop
                muted
                className="fixed w-full h-full object-cover opacity-10"
            />

            <div style={{ fontFamily: 'Instrumental Sans, sans-serif' }} className="z-40 pt-[40px] sm:pt-[105px]">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-16 mb-2 p-4">
                    <div className="bg-red-500 bg-opacity-25 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md border-[2px] border-red-500">
                        <h1 className="text-white text-center text-[25px] sm:text-[30px] font-bold mb-3 py-4">Entre em contato conosco.</h1>
                        <form action="/enviar" method="POST">
                            <label className="text-white text-[20px]" htmlFor="nome-contato">Representante:</label>
                            <br />
                            <input
                                type="text" 
                                id="nome-contato" 
                                name="nome" 
                                required 
                                className="bg-white mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            
                            <br />
                            
                            <label className="text-white text-[20px]" htmlFor="mensagem">Mensagem:</label>
                            <br />
                            <textarea 
                                id="mensagem" 
                                name="mensagem" 
                                required 
                                className="bg-white mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" 
                                rows="3"
                            />

                            <br />
                            <button className="bg-red-500 scale-100 active:scale-[96%] text-white text-[20px] font-semibold py-3 rounded-md transition w-full" type="submit">ENVIAR</button>
                        </form>
                    </div>
                    
                    <div className="bg-red-500 bg-opacity-25 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md border-[2px] border-red-500">
                        <h1 className="text-white text-center text-[25px] sm:text-[30px] font-bold mb-4 py-4">Inscreva-se para receber mais novidades!</h1>
                        <form action="/inscrever" method="POST">
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
                    </div>
                </div>

                <h2 className="text-white italic text-[11px] sm:text-[16px] text-center px-5 sm:px-20">Seus dados serão utilizados exclusivamente para o envio de informações e novidades relacionadas ao grupo TRIO SAMPA.</h2>
            </div>

            <div className="mx-5 z-10 flex justify-center sm:pt-12 overflow-hidden">
                <img className="brightness-[40%] hover:brightness-100 transition duration-700 ease w-[500px] sm:w-[960px] lg:h-[500px] rounded-lg" src="https://t4.ftcdn.net/jpg/08/24/87/57/360_F_824875728_jJh8nndoPx5EHNPrqnLkxpQ4lTlSv7sB.jpg" alt="Imagem de músico tocando violão." />
            </div>

            <div className="mx-5 z-10 hidden 2xl:flex justify-center overflow-hidden mb-[80px]">
                <img className="brightness-[40%] hover:brightness-100 transition duration-700 w-[500px] h-[460px] sm:w-[960px] rounded-lg" src="../../public/image-contact.jpg" alt="Imagem de músico tocando violão." />
            </div>
        </div>
    )
}
