export default function PageNotFound() {
    return (
        <div style={{ fontFamily: 'Instrumental Sans, sans-serif' }} className="h-screen flex flex-col justify-center items-center select-none">
            <h1 className="text-white text-[28px] sm:text-[45px] font-bold text-center">Parece que você perdeu o compasso!</h1>
            <h1 className="text-red-500 text-[18px] sm:text-[30px] text-center">Erro 404: Página não encontrada.</h1>
        </div>
    )
}