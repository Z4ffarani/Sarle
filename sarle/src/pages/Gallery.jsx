import Whatsapp from "../components/Whatsapp"

export default function Gallery() {
    return (
        <div className='z-50 mb-[-40px] min-h-[100vh]'>
            <Whatsapp />

            <div className="grid grid-cols sm:grid-cols-2">
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://sarle.com.br/wp-content/uploads/2023/10/DSCF6351-scaled.jpg"/>
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://sarle.com.br/wp-content/uploads/2023/10/DSCF6455-scaled.jpg"/>
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://sarle.com.br/wp-content/uploads/2023/10/DSCF6816-scaled.jpg"/>
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://sarle.com.br/wp-content/uploads/2023/10/DSCF6859-scaled.jpg"/>
            </div>

            <div className="grid grid-cols sm:grid-cols-3">
                <img className="w-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://sarle.com.br/wp-content/uploads/2023/10/Sequencia-01.00_02_40_24.Quadro002.jpg"/>
                <img className="w-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://sarle.com.br/wp-content/uploads/2023/10/IMG_9917-scaled.jpg"/>
                <img className="w-full brightness-[40%] h-[350px] hover:brightness-100 transition duration-500 ease" src="https://sarle.com.br/wp-content/uploads/2023/11/DSCF3099-scaled.jpg"/>
            </div>

            <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-6 overflow-hidden">
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://media.istockphoto.com/id/1426812284/photo/view-of-sao-paulo-city-by-dusk.jpg?s=612x612&w=0&k=20&c=lOK6eMfWyBYWLEdCfCkJ8Tt1-a0WP4XFgPSoQ2uaKQc="/>
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://wallpapercave.com/wp/wp10336952.jpg"/>
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://tourb.com.br/img/lugares/sao-paulo/edificio-banespa-2.jpg"/>
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://www.estadao.com.br/resizer/v2/C55NYVCQDJF2FDUD65GRVSTIQI.jpg?quality=80&auth=879b865ef8ea01305fff6c7e6d08d277ea60db47927502c616e932064e1c82ea&width=1200&height=900&smart=true"/>
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://images.adsttc.com/media/images/53e8/adb3/c07a/80c3/8400/010d/large_jpg/Flickr_Pedro_Kok_3.jpg?1407757740"/>
                <img className="w-full h-full brightness-[40%] hover:brightness-100 transition duration-500 ease" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg"/>
            </div>
        </div>
    )
}