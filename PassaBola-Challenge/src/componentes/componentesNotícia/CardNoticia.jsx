export default function CardNoticia({ image, title, text }) {
    return (
        <>
            <div className="shrink-0 w-64 ml-1 md:w-100">
                <img src={image} alt={`Imagem ${image}`} />
                <h3 className="font-Jockey text-[#300B74] text-[30px]">{title}</h3>
                <p className="font-Raleway text-[#4D4D4E] text-[15px]">{text}</p>
            </div>
        </>
    )
}