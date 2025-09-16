export default function CardNoticia({ image, title, text }) {
    return (
        <div className="shrink-0 w-60 md:w-96 first:ml-0 ml-1">
            <div className="rounded-sm overflow-hidden"> {/* impede “vazamento” do scale */}
                <img
                    src={image}
                    alt={`Imagem ${title}`}
                    className="duration-300 hover:scale-[1.04] hover:cursor-pointer w-full h-auto"
                />
            </div>
            <h3 className="font-Jockey text-[#300B74] text-[30px]">{title}</h3>
            <p className="font-Raleway text-[#4D4D4E] text-[15px]">{text}</p>
        </div>
    );
}
