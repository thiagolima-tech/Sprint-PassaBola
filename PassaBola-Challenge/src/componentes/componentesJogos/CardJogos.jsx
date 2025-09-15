export default function CardJogos({ image, text }) {
    return (
        <div className="text-center mt-6 duration-300 hover:scale-105">
            <img src={image} alt={image} className="mx-auto w-80 md:w-86 lg:w-94 " />
            <p className="text-white font-Rambla text-3xl my-4 duration-300 hover:scale-105">{text}</p>
        </div>
    )
}