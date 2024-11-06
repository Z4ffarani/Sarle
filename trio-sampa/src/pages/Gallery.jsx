import Loader from "../components/Loader"
import { useState, useEffect } from "react"

export default function Gallery() {
    const [isLoading, setIsLoading] = useState(true)
    const [transition, setTransition] = useState(true)

    useEffect(() => {
        const timerLoading = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        const timerTransition = setTimeout(() => {
            setTransition(false)
        }, 500)

        return () => {
            clearTimeout(timerLoading)
            clearTimeout(timerTransition)
        }
    }, [])

    return (
        <div className='z-50 mb-[-40px]'>
            <div className={`${isLoading ? 'fixed' : 'hidden'} z-50`}>
                <div className={`${transition ? 'opacity-100' : 'opacity-0'} transition duration-500 ease bg-[#050505] h-screen w-screen flex justify-center items-center`}>
                    <Loader />
                </div>
            </div>

            <div className="grid grid-cols sm:grid-cols-2">
                <img className="w-full h-full rotate-180 brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://images.alphacoders.com/437/437902.jpg" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://wallpapercat.com/w/full/b/e/0/1169501-3840x2160-desktop-4k-musical-instruments-wallpaper-image.jpg" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://images2.alphacoders.com/791/791660.jpg" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://cdn.schoolofrock.com/img/content-module-single/image-5-1679605728-1683582742.jpg?auto=format" alt="" />
            </div>

            <div className="grid grid-cols sm:grid-cols-3">
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWljcm9waG9uZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://wallpapercat.com/w/full/d/d/2/1169610-3840x2160-desktop-4k-musical-instruments-wallpaper-image.jpg" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://filmsupply-files.s3.amazonaws.com/fs/files/production/clip_th/1981431/2-h.484.C9ZzZHVGf45KMQILDTWI3D5nFnqMbsYU2VElYWmG.jpg" alt="" />

            </div>

            <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-6 overflow-hidden">
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://media.istockphoto.com/id/1426812284/photo/view-of-sao-paulo-city-by-dusk.jpg?s=612x612&w=0&k=20&c=lOK6eMfWyBYWLEdCfCkJ8Tt1-a0WP4XFgPSoQ2uaKQc=" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://wallpapercave.com/wp/wp10336952.jpg" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://tourb.com.br/img/lugares/sao-paulo/edificio-banespa-2.jpg" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://www.estadao.com.br/resizer/v2/C55NYVCQDJF2FDUD65GRVSTIQI.jpg?quality=80&auth=879b865ef8ea01305fff6c7e6d08d277ea60db47927502c616e932064e1c82ea&width=1200&height=900&smart=true" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://images.adsttc.com/media/images/53e8/adb3/c07a/80c3/8400/010d/large_jpg/Flickr_Pedro_Kok_3.jpg?1407757740" alt="" />
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg" alt="" />
            </div>
        </div>
    )
}