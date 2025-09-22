export default function CardNoticia({ image, title, subtitle }) {
    return (
        <div className="w-60 md:w-96 my-3 md:my-5">
            <div className="rounded-sm overflow-hidden"> {/* impede “vazamento” do scale */}
                <img
                    src={image}
                    alt={`Imagem ${title}`}
                    className="duration-300 hover:scale-[1.04] hover:cursor-pointer w-full h-auto"
                />
            </div>
            <h3 className="font-Jockey text-[#300B74] text-[30px]">{title}</h3>
            <p className="font-Raleway text-[#4D4D4E] text-[15px]">{subtitle}</p>
        </div>
    );
}
