import Loader from "../components/Loader"
import { useState, useEffect } from "react"

import Video from '../../public/biography-background.mp4'
import Logo from '../../public/complete-logo-trio-sampa.png'

export default function Biography() {
    const [isLoading, setIsLoading] = useState(true)
    const [transition, setTransition] = useState(true)

    useEffect(() => {
        const timerLoading = setTimeout(() => {
            setIsLoading(false)
        }, 1300)

        const timerTransition = setTimeout(() => {
            setTransition(false)
        }, 800)

        return () => {
            clearTimeout(timerLoading)
            clearTimeout(timerTransition)
        }
    }, [])

    return (
        <div className='z-50 flex flex-col gap-12 pb-2 xl:pb-14'>
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
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-red-500 rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'Instrumental Sans, sans-serif', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        A performance do TRIO SAMPA é marcada pelo equilíbrio entre técnica e sensibilidade, com uma execução refinada e repleta de virtuosismo. Cada integrante do trio contribui com sua própria identidade e especialidade musical, resultando em um som harmônico que valoriza a essência de cada estilo. Em suas apresentações, o grupo traz novas camadas a cada arranjo, explorando dinâmicas que vão do suave ao vibrante, oferecendo ao público uma verdadeira jornada sonora. Esse comprometimento com a qualidade e originalidade faz com que o TRIO SAMPA seja reconhecido por seu trabalho autêntico e pela capacidade de transformar músicas conhecidas em experiências memoráveis.
                    </p>
                </div>
                <div className="flex flex-col">
                    <img
                        src={Logo}
                        alt="Logo completa do TRIO SAMPA"
                        className="xl:w-[700px] hover:scale-105 transition-all duration-700 ease"
                    />
                </div>
            </div>

            <div className="z-40 flex flex-col-reverse gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src="https://www.entertainment-nation.co.uk/blog/wp-content/uploads/2021/10/the-wildermen-wedding-band-800x533.jpeg"
                        alt="Logo completa do TRIO SAMPA"
                        className="object-cover w-full h-[380px]"
                    />
                </div>
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-red-500 rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'Instrumental Sans, sans-serif', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        TRIO SAMPA é composto por três músicos talentosos que trazem uma rica bagagem de experiência em múltiplos gêneros musicais, como MPB, Jazz, Bossa Nova, Samba e Pop. Unidos pela paixão pela música, esses artistas têm em comum o desejo de interpretar clássicos de maneira inovadora, transformando cada apresentação em uma experiência única e cativante. A formação acústica do grupo permite que explorem nuances e detalhes sonoros, criando versões inéditas e intimistas de sucessos conhecidos. Essa abordagem faz do TRIO SAMPA uma escolha ideal para eventos que buscam um toque especial e personalizado, capaz de envolver o público e criar uma atmosfera marcante.
                    </p>
                </div>
            </div>

            <div className="z-40 flex flex-col gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-red-500 rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'Instrumental Sans, sans-serif', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        Com sua versatilidade, o TRIO SAMPA adapta-se a diferentes tipos de eventos, desde casamentos intimistas até apresentações em bares e eventos corporativos. A música que produzem não é apenas entretenimento, mas uma expressão da conexão entre os músicos e sua audiência, criando momentos de celebração e emoção. A forma acústica com que interpretam as canções dá uma nova roupagem aos clássicos, que ganham vida com um toque contemporâneo, sem perder a essência de cada estilo. A experiência que o TRIO SAMPA proporciona é imersiva, trazendo ao público não apenas uma apresentação musical, mas uma viagem sensorial por diferentes ritmos e sonoridades.
                    </p>
                </div>
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src="https://t4.ftcdn.net/jpg/08/42/52/25/360_F_842522527_2SbiUIIZNVTPlhfV7Bp2ZINvePRMHVzI.jpg"
                        alt="Logo completa do TRIO SAMPA"
                        className="object-cover w-full h-[380px]"
                    />
                </div>
            </div>

            <div className="z-40 flex flex-col-reverse gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/039/939/492/non_2x/jazz-poster-illustration-vector.jpg"
                        alt="Logo completa do TRIO SAMPA"
                        className="object-cover w-full h-[380px]"
                    />
                </div>
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-red-500 rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'Instrumental Sans, sans-serif', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        Em suas apresentações, o TRIO SAMPA traz um repertório cuidadosamente selecionado, composto por clássicos que conquistam diferentes gerações. Cada arranjo é pensado para valorizar os aspectos mais marcantes de cada música, oferecendo um espetáculo que é, ao mesmo tempo, familiar e surpreendente. Além de conquistar o público com seu talento e carisma, o trio encanta pela forma como transforma cada melodia em uma experiência visual e sonora. Seja em um casamento, um evento corporativo ou em uma apresentação em bares, o TRIO SAMPA tem a capacidade de criar uma atmosfera sofisticada e calorosa que faz toda a diferença.
                    </p>
                </div>
            </div>
        </div>
    )
}