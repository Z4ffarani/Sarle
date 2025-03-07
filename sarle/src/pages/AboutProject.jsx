import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import Corporativo from '../data/corporativo.json'
import Moda from '../data/moda.json'
import Gastronomia from '../data/gastronomia.json'

import Cellphone from '../../public/sobre-projeto/cellphone.png'

export default function AboutProject() {
  const { titulo } = useParams()
  const categories = [Corporativo, Moda, Gastronomia]
  const [content, setContent] = useState(null)

  useEffect(() => {
    const foundContent = categories.flat().find(info => info.title === titulo)
    setContent(foundContent)
  }, [titulo])

  return (
    <div className='min-h-screen text-white'>
      {
        content ? (
          <>
            <div className='pt-[100px] sm:pt-[180px] px-5 md:px-[50px] 2xl:px-[200px] flex flex-col w-full text-left items-start'>
              <h1 style={{ fontFamily: 'airbus' }} className='text-[40px] sm:text-[50px] md:text-[65px]'>{content.title}</h1>
              <p style={{ fontFamily: 'instrument' }} className='text-[20px] sm:text-[30px] md:text-[35px] font-medium'>{content.event}</p>
              <p style={{ fontFamily: 'instrument' }} className='text-[17px] lg:w-[70%] xl:w-[50%] pt-14 text-justify'>{content.description}</p>

              {
                content.videocase ? (
                  <>
                    <h1 style={{ fontFamily: 'instrument' }} className='mt-14 sm:mt-20 mb-6 text-[35px] sm:text-[50px] font-bold select-none opacity-40'>VIDEOCASE</h1>

                    <iframe
                      src={content.videocase}
                      
                      className="mt-[-20px] mb-[60px] sm:mb-[110px] w-full h-[250px] sm:h-[450px] lg:h-[720px] xl:h-[824px] object-cover rounded-lg border-2 border-designRed z-30"
                    />
                  </>
                ) : null
              }

              {
                content.aftermovie ? (
                  <>
                    <h1 style={{ fontFamily: 'instrument' }} className='mb-6 text-[35px] sm:text-[50px] font-bold select-none opacity-40'>AFTERMOVIE</h1>

                    <iframe
                      src={content.aftermovie}
                      
                      className="mt-[-20px] mb-[60px] sm:mb-[110px] w-full h-[250px] sm:h-[450px] lg:h-[720px] xl:h-[824px] object-cover rounded-lg border-2 border-designRed z-30"
                    />
                  </>
                ) : null
              }

              {
                content.photography ? (
                  <>
                    <h1 style={{ fontFamily: 'instrument' }} className={`${content.videocase ? '' : 'mt-14'} text-[35px] sm:text-[50px] mb-1 font-bold select-none opacity-40`}>FOTOGRAFIA</h1>

                    <div className='masonry mb-[60px] sm:mb-[110px]' style={{ columnCount: 3, columnGap: '0px' }}>
                      {
                        content.photography.map((photo, index) => (
                          <LazyLoadImage
                            key={index}
                            src={photo}
                            effect="blur"
                            className='break-inside-avoid mb-[-6px]'
                            threshold={10}
                          />
                        ))
                      }
                    </div>
                  </>
                ) : null
              }

              {
                content.verticals ? (
                  <div className='w-full text-center mb-14'>
                    <h1 style={{ fontFamily: 'instrument' }} className='text-[35px] sm:text-[50px] font-bold select-none opacity-40'>CONTEÚDOS VERTICAIS</h1>
                  </div>
                ) : null
              }
            </div>

            {
              content.verticals ? (
                <div className='flex justify-center items-center w-full'>
                  <div className={`grid sm:grid-cols-1 lg:grid-cols-3 mb-10 md:mb-20 gap-10 lg:gap-5 xl:gap-24`}>
                    {
                      content.verticals.map((video, index) => (
                        <div key={index} className='flex justify-center items-center h-[480px] w-[280px] sm:h-[700px] sm:w-[600px] lg:h-[550px] lg:w-[315px]'>
                          <iframe
                            src={video}
                            className="absolute w-[280px] h-[500px] rounded-[35px] sm:h-[705px] sm:w-[385px] scale-[93%] sm:scale-[95%] sm:rounded-[46px] lg:scale-[75%] pr-1"
                          />
                          
                          <img src={Cellphone} className='w-[280px] sm:w-[400px] h-[100%]'/>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ) : null
            }

            <div className='px-5 sm:px-16 sm:py-10 gap-2 sm:gap-3 flex flex-col text-center justify-center items-center'>
              <h1 style={{ fontFamily: 'instrument' }} className='text-[18px] sm:text-[25px] md:text-[30px] font-semibold'>Cada projeto que você viu aqui começou com uma conversa. Vamos começar a sua?</h1>
              <h2 style={{ fontFamily: 'instrument' }} className='hidden sm:block text-[20px] md:text-[25px] font-light mb-8'>Fale conosco agora pelo WhatsApp e tire suas ideias do papel!</h2>
            
              <a href='https://api.whatsapp.com/send?phone=5511975440070' style={{ fontFamily: 'instrument' }} className='text-white mt-6 sm:mt-0 px-5 py-[10px] border-2 rounded-full bg-green-800 text-[20px] sm:text-[25px] hover:bg-green-500 transition-all duration-300 ease active:scale-90 font-medium'>Fale conosco</a>
            </div>
          </>
        ) : null
      }
    </div>
  )
}