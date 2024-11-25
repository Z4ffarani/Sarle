export default function PageNotFound() {
    return (
        <div style={{ fontFamily: 'instrument' }} className="h-screen flex flex-col justify-center items-center select-none">
            <h1 className="text-white text-[28px] sm:text-[45px] font-bold text-center">A foto ainda não ficou boa!</h1>
            <h1 className="text-designRed text-[18px] sm:text-[30px] text-center">Erro 404: Página não encontrada.</h1>
        </div>
    )
}