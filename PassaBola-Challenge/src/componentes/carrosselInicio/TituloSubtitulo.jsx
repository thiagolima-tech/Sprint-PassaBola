export default function TituloSubtitulo({titulo, subtitulo}){
    return(
        <div className="font-Jockey text-white absolute mx-10 bottom-26 md:w-[75%]">
            <h2 className="text-[20px] sm:text-3xl md:mb-2">{subtitulo}</h2>
            <h1 className="text-[35px] sm:text-6xl">{titulo}</h1>
        </div>
    )
}