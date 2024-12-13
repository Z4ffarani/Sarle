import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Corporativo from '../data/corporativo.json'
import Moda from '../data/moda.json'
import Gastronomia from '../data/gastronomia.json'

export default function AboutProject() {
  const { titulo } = useParams()
  const categories = [Corporativo, Moda, Gastronomia]
  const [content, setContent] = useState(null)

  useEffect(() => {
    const foundContent = categories.flat().find(info => info.title === titulo)

    setContent(foundContent)
  }, [categories])

  return (
    <div className='h-screen text-white'>
      {content ? (
        <div>
          <h1>{content.title}</h1>
          <p>{content.event}</p>
        </div>
      ) : (
        <p>Carregando...</p>  
      )}
    </div>
  )
}