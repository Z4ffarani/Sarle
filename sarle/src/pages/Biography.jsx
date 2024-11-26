import Loader from "../components/Loader"
import { useState, useEffect } from "react"
import Whatsapp from "../components/Whatsapp"

import Selfie from '../../public/biografia/selfie-sarle.png'
import Corporativo from '../../public/biografia/corporativo.jpg'
import Moda from '../../public/biografia/moda.png'
import Gastronomia from '../../public/biografia/gastronomia.jpg'

import Video from '../../public/biografia/background.mp4'

export default function Biography() {
    const [isLoading, setIsLoading] = useState(true)
    const [transition, setTransition] = useState(true)

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

    return (
        <div className='z-50 flex flex-col gap-12 pb-2 xl:pb-14 min-h-[100vh]'>
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

            <div className="z-40 relative flex flex-col gap-12 xl:flex-row items-center justify-center pt-14 px-5 sm:pt-[73px] mt-12">
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[69%] z-10 border-2 border-designRed rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        A Sarle, fundada em 2016 na dinâmica cidade de São Paulo, nasceu com a missão de contar histórias de maneira única e envolvente através do audiovisual. Desde seus primeiros passos, a empresa tem se destacado por sua paixão em transformar ideias em narrativas visuais marcantes, capturando emoções e criando conexões duradouras. Ao longo dos anos, a Sarle construiu uma reputação sólida como parceira criativa para marcas que desejam se destacar no mercado, combinando inovação e excelência em todos os projetos que realiza. Cada produção reflete um compromisso inabalável com a qualidade e o desejo de emocionar, inspirar e conquistar públicos.
                    </p>
                </div>
                <div className="flex flex-col">
                    <img
                        src={Selfie}
                        alt="Logo completa do TRIO SAMPA"
                        className="xl:w-[350px]"
                    />
                </div>
            </div>

            <div className="z-40 flex flex-col-reverse gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src={Corporativo}
                        alt="Logo completa do TRIO SAMPA"
                        className="object-cover w-full h-[380px]"
                    />
                </div>
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-designRed rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        A essência da Sarle está em sua missão de transformar marcas e posicioná-las estrategicamente no mercado, indo além do visual e promovendo experiências memoráveis. Para a Sarle, cada cliente é único, e cada projeto é uma oportunidade de criar algo extraordinário. Através de um profundo entendimento das necessidades e valores das empresas que atende, a Sarle desenvolve soluções personalizadas que não apenas destacam as marcas, mas também geram engajamento genuíno e fidelidade. Com foco na criação de conteúdos que encantam, a empresa se torna uma extensão dos sonhos de seus clientes, ajudando-os a alcançar novos patamares.
                    </p>
                </div>
            </div>

            <div className="z-40 flex flex-col gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-designRed rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        A essência da Sarle está em sua missão de transformar marcas e posicioná-las estrategicamente no mercado, indo além do visual e promovendo experiências memoráveis. Para a Sarle, cada cliente é único, e cada projeto é uma oportunidade de criar algo extraordinário. Através de um profundo entendimento das necessidades e valores das empresas que atende, a Sarle desenvolve soluções personalizadas que não apenas destacam as marcas, mas também geram engajamento genuíno e fidelidade. Com foco na criação de conteúdos que encantam, a empresa se torna uma extensão dos sonhos de seus clientes, ajudando-os a alcançar novos patamares.
                    </p>
                </div>
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src={Moda}
                        alt="Logo completa do TRIO SAMPA"
                        className="object-cover w-full h-[380px]"
                    />
                </div>
            </div>

            <div className="z-40 flex flex-col-reverse gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src={Gastronomia}
                        alt="Logo completa do TRIO SAMPA"
                        className="object-cover w-full h-[380px]"
                    />
                </div>
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-designRed rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        A fotografia profissional é outro pilar fundamental no portfólio da Sarle, oferecendo capturas que vão além de simples imagens. Cada clique é planejado para transmitir a essência e os valores da marca, destacando seus diferenciais de forma autêntica e impactante. Seja para campanhas publicitárias, registros institucionais ou momentos únicos, a Sarle se dedica a transformar cada foto em uma história que conecta marcas a seus públicos de maneira inesquecível. Com uma equipe experiente e criativa, a Sarle continua a moldar o mercado audiovisual, entregando resultados que unem estratégia, beleza e emoção em cada detalhe.
                    </p>
                </div>
            </div>
        </div>
    )
}