import Whatsapp from "../components/Whatsapp"

import Selfie from '../../public/sobre-nós/selfie-sarle.png'
import Imagem2 from '../../public/sobre-nós/imagem-2.png'
import Imagem3 from '../../public/sobre-nós/imagem-3.png'

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
                        Criada em 2016 por Raphael Sarle, a empresa começou na área de comunicação e Marketing realizando trabalhos para marcas e empresas na área de vídeo, fotografia e conteúdo para redes sociais. Hoje a Sarle está estruturada em produzir conteúdos com a maior qualidade possível, sem fugir da identidade, conceito e cultura do seu negócio. Com formação em Publicidade e Gestão de Marketing, o workflow da Sarle tem como objetivo produzir conteúdos que tragam conversão e posicionamento dos nossos clientes e assim obter sucesso.
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
                        src={Imagem2}
                        className="object-cover w-full h-[380px]"
                    />
                </div>
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-designRed rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                    Oferecemos produção de vídeos e filmes, desde concepção até edição, para garantir que sua mensagem seja entregue de maneira impactante.
                        <li>Vídeos Institucionais</li>
                        <li>Vídeos Depoimentos</li>
                        <li>Vídeos promocionais</li>
                        <li>Vídeos de conteúdos para redes sociais</li>
                        <li>Vídeos de campanhas Endomarketing</li>
                        <li>Cobertura de Eventos (Corporativos e sociais)</li>
                        <li>Produção de Cursos completos e Vídeo Aulas</li>
                        <li>Fotografia Profissional: Capturamos momentos preciosos e imagens impressionantes que contam histórias e destacam sua marca.</li>
                        <li>Fotografia corporativa</li>
                        <li>Fotografia de produtos</li>
                        <li>Fotografia esportiva</li>
                        <li>Cobertura de Eventos (Corporativos e sociais)</li>
                    </p>
                </div>
            </div>

            <div className="z-40 flex flex-col gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-designRed rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-justify">
                        Trabalhamos e treinamos profissionais para atender de uma forma padronizada e alinhada com nossa cultura e valores, focando na dedicação para atender o seu projeto com máxima perfeição e realizar uma entrega 100% eficaz.
                        
                        Nossa equipe contém: Videomakers, fotógrafos, assistentes de produção, produtores gerais, pilotos de drone e editores.
                    </p>
                </div>
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src={Imagem3}
                        className="object-cover w-full h-[380px]"
                    />
                </div>
            </div>

            <h2 style={{ fontFamily: 'airbus' }} className='pt-10 sm:mb-[-30px] sm:py-16 text-white text-center text-[33px] md:text-[45px] lg:text-[60px] opacity-40 text-wrap px-5 select-none'>COM QUEM TRABALHAMOS</h2>

            <div className="flex justify-center mx-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">RAPHAEL</h1>
                            <h2 style={{ }} className="text-[20px]">CEO</h2>
                        </div>
                        <img src="../../public/sobre-nós/equipe/raphael.png" className="object-cover h-full rounded-tl-xl rounded-bl-xl"/>
                    </div>
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">LAÍS</h1>
                            <h2 style={{ }} className="text-[20px]">Fotógrafa</h2>
                        </div>
                        <img src="../../public/sobre-nós/equipe/lais.png" className="object-cover h-full"/>
                    </div>
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">DANILO</h1>
                            <h2 style={{ }} className="text-[20px]">Assistente</h2>
                        </div>
                        <img src="../../public/sobre-nós/equipe/danilo.png" className="object-cover h-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}