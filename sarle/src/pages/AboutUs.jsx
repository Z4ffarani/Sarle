import Whatsapp from "../components/Whatsapp"
import Selfie from '../../public/sobre-nós/selfie-sarle.png'
import Corporativo from '../../public/sobre-nós/corporativo.jpg'
import Moda from '../../public/sobre-nós/moda.png'
import Gastronomia from '../../public/sobre-nós/gastronomia.jpg'

import Video from '../../public/sobre-nós/background.mp4'

export default function AboutUs() {
    return (
        <div className='z-50 flex flex-col gap-12 pb-2 xl:pb-14 min-h-[100vh]'>
            <Whatsapp />
            
            <video
                src={Video}
                autoPlay
                loop
                muted
                className="z-[-999] fixed w-full h-full object-cover opacity-10"
            />

            <div className="w-full flex justify-center items-center">
                <video src={Video}
                    autoPlay
                    loop
                    muted
                    className="m-5 mb-[-50px] scale-90 sm:w-[1200px] object-cover rounded-lg border-2 border-designRed z-30"
                />
            </div>

            <div className="z-40 relative flex flex-col gap-12 xl:flex-row items-center justify-center pt-14 px-5">
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[69%] z-10 border-2 border-designRed rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        A Sarle, fundada em 2016 na dinâmica cidade de São Paulo, nasceu com a missão de contar histórias de maneira única e envolvente através do audiovisual. Desde seus primeiros passos, a empresa tem se destacado por sua paixão em transformar ideias em narrativas visuais marcantes, capturando emoções e criando conexões duradouras. Ao longo dos anos, a Sarle construiu uma reputação sólida como parceira criativa para marcas que desejam se destacar no mercado, combinando inovação e excelência em todos os projetos que realiza. Cada produção reflete um compromisso inabalável com a qualidade e o desejo de emocionar, inspirar e conquistar públicos.
                    </p>
                </div>
                <div className="flex flex-col">
                    <img
                        src={Selfie}
                        className="xl:w-[350px]"
                    />
                </div>
            </div>

            <div className="z-40 flex flex-col-reverse gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src={Corporativo}
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
                        className="object-cover w-full h-[380px]"
                    />
                </div>
            </div>

            <div className="z-40 flex flex-col-reverse gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src={Gastronomia}
                        className="object-cover w-full h-[380px]"
                    />
                </div>
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-designRed rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        A fotografia profissional é outro pilar fundamental no portfólio da Sarle, oferecendo capturas que vão além de simples imagens. Cada clique é planejado para transmitir a essência e os valores da marca, destacando seus diferenciais de forma autêntica e impactante. Seja para campanhas publicitárias, registros institucionais ou momentos únicos, a Sarle se dedica a transformar cada foto em uma história que conecta marcas a seus públicos de maneira inesquecível. Com uma equipe experiente e criativa, a Sarle continua a moldar o mercado audiovisual, entregando resultados que unem estratégia, beleza e emoção em cada detalhe.
                    </p>
                </div>
            </div>

            <h2 style={{ fontFamily: 'airbus' }} className='pt-10 sm:mb-[-30px] sm:py-16 text-white text-center text-[33px] md:text-[45px] lg:text-[60px] opacity-40 text-wrap px-5 select-none'>COM QUEM TRABALHAMOS</h2>

            <div className="flex justify-center mx-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">RAFAEL</h1>
                            <h2 style={{ }} className="text-[20px]">Crew manager</h2>
                        </div>
                        <img src={Gastronomia} className="object-cover h-full"/>
                    </div>
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">RAFAEL</h1>
                            <h2 style={{ }} className="text-[20px]">Crew manager</h2>
                        </div>
                        <img src={Gastronomia} className="object-cover h-full"/>
                    </div>
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">RAFAEL</h1>
                            <h2 style={{ }} className="text-[20px]">Crew manager</h2>
                        </div>
                        <img src={Gastronomia} className="object-cover h-full"/>
                    </div>
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">RAFAEL</h1>
                            <h2 style={{ }} className="text-[20px]">Crew manager</h2>
                        </div>
                        <img src={Gastronomia} className="object-cover h-full"/>
                    </div>
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">RAFAEL</h1>
                            <h2 style={{ }} className="text-[20px]">Crew manager</h2>
                        </div>
                        <img src={Gastronomia} className="object-cover h-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}