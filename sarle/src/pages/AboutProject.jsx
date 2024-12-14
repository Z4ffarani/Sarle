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

  useEffect(() => {
    const foundContent = categories.flat().find(info => info.title === titulo)

    setContent(foundContent)
  }, [categories])

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

                    <video src={content.videocase}
                      autoPlay
                      loop
                      muted
                      className="mt-[-20px] mb-[60px] sm:mb-[110px] w-full lg:h-[720px] object-cover rounded-lg border-2 border-designRed z-30"
                    />
                  </>
                ) : null
              }

              {
                content.photography ? (
                  <>
                    <h1 style={{ fontFamily: 'instrument' }} className='text-[35px] sm:text-[50px] mb-1 font-bold select-none opacity-40'>FOTOGRAFIA</h1>

                    <div className='masonry mb-[60px] sm:mb-[110px]' style={{ columnCount: 3, columnGap: '0px' }}>
                      {
                        content.photography.map(photo => (
                          <img src={photo} className='w-full object-cover break-inside-avoid'/>
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
                <div className='flex w-full flex-col lg:flex-row justify-center items-center mb-20 gap-10 lg:gap-5 xl:gap-24'>
                  {
                    content.verticals.map(video => (
                      <div className='flex justify-center items-center h-[480px] w-[280px] sm:h-[700px] sm:w-[600px] lg:h-[550px] lg:w-[315px]'>
                        <video src={video}
                          autoPlay
                          loop
                          muted
                          className="z-[-999] absolute w-[280px] sm:w-[400px] scale-[95%] lg:scale-[75%] rounded-[50px]"
                        />
                        
                        <img src={Cellphone} className='w-[280px] sm:w-[400px] h-[100%]'/>
                      </div>              
                    ))
                  }
                </div>
              ) : null
            }
          </>
        ) : null
      }
    </div>
  )
}