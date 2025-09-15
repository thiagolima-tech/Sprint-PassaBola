export default function CardNoticia({ image, title, text }) {
    return (
        <>
            <div className="shrink-0 w-64 ml-1 md:w-100">
                <img src={image} alt={`Imagem ${image}`} className="duration-300 hover:scale-[1.04] rounded-sm hover:cursor-pointer" />
                <h3 className="font-Jockey text-[#300B74] text-[30px]">{title}</h3>
                <p className="font-Raleway text-[#4D4D4E] text-[15px]">{text}</p>
            </div>
        </>
    )
}