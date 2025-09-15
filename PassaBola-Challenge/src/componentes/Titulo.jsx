export default function Titulo({title, position, color}) {
    return (
        <div className="mx-10 mt-4 mb-2">
            <h1 className={`flex justify-${position} font-Jockey text-[35px] md:text-[45px] uppercase`}
            style={color={color}}
            >{title}</h1>
        </div>
    )
}