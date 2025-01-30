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
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-center sm:text-justify">
                        Fundada por Raphael Sarle, a SARLE nasceu para ser mais do que uma produtora audiovisual — somos parceiros estratégicos na criação de conteúdos que comunicam, conectam e convertem. Desde 2016, ajudamos empresas a fortalecerem sua presença no mercado por meio de vídeos e fotografias que destacam sua essência e valores. 

                        Com um foco inicial em marketing e comunicação, hoje a SARLE se especializa na produção de vídeos institucionais, conteúdos para redes sociais e campanhas de endomarketing que traduzem a identidade de cada marca. Nosso processo combina criatividade, estratégia e a busca por resultados, trazendo valor ao posicionamento de CEOs e equipes de marketing que buscam se diferenciar no mercado. 

                        Com expertise em Publicidade e Gestão de Marketing, nossa abordagem é orientada a resultados: produzimos conteúdos que não só inspiram, mas também geram conversão e engajamento para nossos clientes.
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
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-center sm:text-justify">
                        <p>
                            Na SARLE, oferecemos soluções audiovisuais completas que traduzem suas ideias em mensagens impactantes, sempre alinhadas aos objetivos estratégicos da sua marca. Seja para fortalecer seu branding ou atrair novos negócios, nossos serviços são desenhados para CEOs e líderes de marketing que buscam excelência e inovação.
                        </p>

                        <br/>   

                        <p className="text-[25px] sm:text-[35px]"><b>PRODUÇÃO DE VÍDEOS:</b></p>
                        <li>Vídeos Institucionais: Apresente sua empresa de forma memorável e reforce sua autoridade no mercado.</li>
                        <li>Depoimentos de Clientes: Humanize sua marca e inspire confiança.</li>
                        <li>Vídeos promocionais;</li>
                        <li>Conteúdos para Redes Sociais: Alcance seu público com materiais otimizados para engajamento.</li>
                        <li>Endomarketing: Engaje colaboradores e fortaleça a cultura organizacional.</li>
                        <li>Cobertura de Eventos Corporativos e Sociais: Destaque os melhores momentos de forma profissional.</li>
                        <li>Cursos e Vídeo Aulas: Crie materiais educativos com qualidade técnica e didática.</li>
                        
                        <br/>

                        <p className="text-[25px] sm:text-[35px]"><b>FOTOGRAFIA PROFISSIONAL:</b></p>
                        <li>Fotografia Corporativa: Retratos institucionais que reforçam a credibilidade da sua marca.</li>
                        <li>Fotografia de Produtos: Destaque os detalhes e a qualidade do que você oferece.</li>
                        <li>Fotografia Esportiva: Capture emoções e movimento com precisão.</li>
                        <li>Cobertura Fotográfica de Eventos: Registre cada detalhe de forma sofisticada.</li>
                        
                        <br/>

                        <p>
                            Cada projeto é executado com foco em excelência visual e impacto estratégico, garantindo que sua mensagem alcance o público certo.
                        </p>
                    </p>
                </div>
            </div>

            <div className="z-40 flex flex-col gap-12 xl:flex-row items-center px-5 justify-center">
                <div className="flex items-center px-6 py-8 sm:px-8 sm:py-8 xl:w-[50%] z-10 border-2 border-designRed rounded-lg backdrop-blur-md">
                    <p style={{ fontFamily: 'instrument', textShadow: 'black 0px 0px 10px' }} className="text-[15px] md:text-[23px] text-white text-center sm:text-justify">
                        <p>
                            Na SARLE, reunimos um time de especialistas apaixonados por transformar ideias em conteúdos memoráveis. Nossa equipe é composta por:
                        </p>

                        <br/>

                        <li>Videomakers experientes;</li>
                        <li>Fotógrafos especializados em retratos corporativos e produtos;</li>
                        <li>Assistentes de produção capacitados;</li>
                        <li>Produtores gerais;</li> 
                        <li>Pilotos de drone licenciados;</li> 
                        <li>Editores de vídeo altamente qualificados.</li>

                        <br/>

                        Nossos profissionais trabalham alinhados aos valores da SARLE, entregando projetos personalizados, com atenção aos detalhes e foco total em resultados. Seja para CEOs buscando reforçar o branding da empresa ou para líderes de marketing com demandas específicas, garantimos eficiência, criatividade e impacto em cada entrega.
                    </p>
                </div>
                <div className="overflow-hidden xl:w-[700px] rounded-lg">
                    <img
                        src={Imagem3}
                        className="object-cover w-full h-[380px]"
                    />
                </div>
            </div>

            <h2 style={{ fontFamily: 'airbus' }} className='pt-10 sm:mb-[-30px] sm:py-16 text-white text-center text-[33px] md:text-[45px] lg:text-[60px] opacity-40 text-wrap px-5 select-none'>EQUIPE</h2>

            <div className="flex justify-center mx-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">RAPHAEL</h1>
                            <h2 style={{ }} className="text-[20px]">CEO</h2>
                        </div>
                        <img src="../../../sobre-nós/equipe/raphael-ceo.png" className="object-cover h-full"/>
                    </div>
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">CAROL</h1>
                            <h2 style={{ }} className="text-[20px]">Mobile</h2>
                        </div>
                        <img src="../../../sobre-nós/equipe/carol-mobile.png" className="object-cover h-full"/>
                    </div>
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">PEDRO</h1>
                            <h2 style={{ }} className="text-[20px]">Editor</h2>
                        </div>
                        <img src="../../../sobre-nós/equipe/pedro-editor.png" className="object-cover h-full"/>
                    </div>
                    <div className="w-[280px] h-[500px]">
                        <div className="absolute p-5 mt-[380px] text-white">
                            <h1 style={{ fontFamily: 'airbus', }} className="text-[30px]">VICTOR</h1>
                            <h2 style={{ }} className="text-[20px]">Assistente</h2>
                        </div>
                        <img src="../../../sobre-nós/equipe/victor-assistente.png" className="object-cover h-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}