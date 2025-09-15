export default function BtnDocs({ text }) {
    return (
        <div className="ml-10">
            <button className="my-4 py-2 px-4 text-[12px] md:text-2xl md:rounded-lg border-1 border-gray-500 rounded-md text-[#300B74] font-Raleway duration-300 cursor-pointer hover:scale-105 hover:bg-[#6533c3] hover:text-[#ffffff]">
                {text}
            </button>
        </div>
    )
}