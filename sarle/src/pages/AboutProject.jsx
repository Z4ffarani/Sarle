import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Corporativo from '../data/corporativo.json'
import Moda from '../data/moda.json'
import Gastronomia from '../data/gastronomia.json'

import Cellphone from '../../public/sobre-projeto/cellphone.png'

export default function AboutProject() {
  const { titulo } = useParams()
  const categories = [Corporativo, Moda, Gastronomia]
  const [content, setContent] = useState(null)
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    const foundContent = categories.flat().find(info => info.title === titulo)

    setContent(foundContent)

    setTimeout(() => {
      setTransition(true)
    }, 2000)
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
                          <img
                            key={index}
                            src={photo}
                            loading='eager'
                            className={`${transition ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease break-inside-avoid`}
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
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${content.verticals.length == 1 ? '1' : content.verticals.length == 2 ? '2' : content.verticals.length >= 3 ? '3' : '4'} mb-20 gap-10 lg:gap-5 xl:gap-24`}>
                    {
                      content.verticals.map(video => (
                        <div className='flex justify-center items-center h-[480px] w-[280px] sm:h-[700px] sm:w-[600px] lg:h-[550px] lg:w-[315px]'>
                          <iframe src={video}

                            className="z-[-999] absolute w-[280px] h-[500px] rounded-[20px] sm:h-[705px] sm:w-[400px] scale-[93%] sm:scale-[95%] sm:rounded-[50px] lg:scale-[75%]"
                          />
                          
                          <img src={Cellphone} className='w-[280px] sm:w-[400px] h-[100%]'/>
                        </div>              
                      ))
                    }
                  </div>
                </div>
              ) : null
            }
          </>
        ) : null
      }
    </div>
  )
}