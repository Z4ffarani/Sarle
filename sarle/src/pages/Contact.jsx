import emailjs from '@emailjs/browser'
import { useState } from "react"
import Whatsapp from "../components/Whatsapp"

import Video from "../../public/contato/background.mp4"

export default function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault()

        if (email === '' || message === '') {
            alert('Preencha todos os campos para enviar a mensagem.')
            return
        }

        const templateParams = {
            email: email,
            message: message
        }

        emailjs.send("service_sqic02f", "template_pcraepr", templateParams, "0G1Jc6AAMc3jtTUoi")
        .then((response) => {
            alert("E-mail enviado! Entraremos em contato em breve.")
            console.log("E-mail enviado", response.status, response.text)
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("Erro: ", err)
        })
    }

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

    return (
        <div className='z-50 flex flex-col gap-10 min-h-[100vh]'>
            <Whatsapp />

            <video
                src={Video}
                autoPlay
                loop
                muted
                className="fixed w-full h-full object-cover opacity-10"
            />

            <div className='flex flex-col sm:flex-row sm:m-5 gap-5 xl:gap-0 justify-center pt-20'>
                <div className="max-w-[620px] bg-designRed bg-opacity-25 backdrop-blur-md mt-10 sm:w-full sm:mt-0 p-5 mx-4 sm:mx-0 rounded-lg shadow-lg border-[2px] border-designRed">
                    <h1 style={{ fontFamily: 'airbus' }} className="text-white text-center text-[25px] sm:text-[30px] mb-7 sm:mb-10">Entre em contato conosco!</h1>
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
                    <button className='z-50 text-white text-[50px] pt-[30px] transition-all duration-300 ease active:scale-90 active:text-designRed' onClick={handlePreviousDepoimento}>⮜</button>

                    <iframe
                        className='rounded-md mt-10 sm:mt-0 shadow-lg border-[2px] border-designRed w-full h-[250px] sm:h-[390px] md:h-[323px] scale-[145%] md:scale-[140%]'
                        src={Depoimentos[videoDepoimento]}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />

                    <button className='z-50 text-white text-[50px] pt-[30px] transition-all duration-300 ease active:scale-90 active:text-designRed' onClick={handleNextDepoimento}>⮞</button>
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
