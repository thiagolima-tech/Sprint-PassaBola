import logotipo from "../../assets/Logotipo-PassaBola-Branco.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

export default function Header({menuAberto, setMenuAberto}) {

    const LINKS = [
        { name: "Home" },
        { name: "Campeonatos" },
        { name: "Jogos" },
        { name: "Atletas" },
    ];


    return (
        <header className="w-full flex justify-between">
            {/* Menu Mobile */}
            <div className="flex">
                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="absolute top-10 left-8 md:hidden text-white z-50"
                >
                    {menuAberto ? <IoMdClose size={46} /> : <IoMdMenu size={46} />}
                </button>
                <a href="">
                    <IoPersonSharp
                        className={`absolute md:hidden left-25 top-11 z-10
                        text-4xl text-white rounded-full p-2 bg-gray-400
                        cursor-pointer transition-transform duration-300 hover:scale-105
                        ${menuAberto ? "opacity-100" : "opacity-0"}
                        `}
                    />
                </a>
            </div>

            <div className={`absolute md:hidden top-0 left-0 w-full h-screen bg-[#561EBD] flex flex-col items-center gap-6 text-2xl uppercase transform transition-transform ${menuAberto ? "opacity-100" : "opacity-0"}`}
                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
            >
                <div className="absolute top-30 left-5">
                    {LINKS.map((link, index) => (
                        <li key={index}
                            className="list-none w-full text-start text-white font-Jockey p-4 hover:bg-[#2e1165] transition-all cursor-pointer">{link.name}</li>
                    ))}
                </div>
            </div>

            <a href="#">
                <img src={logotipo} alt="Logotipo Passa Bola"
                    className="w-18 top-10 sm:w-24 right-10 sm:top-8 cursor-pointer hover:scale-105 duration-300 absolute md:left-16 md:top-10  " />
            </a>

            {/* NAV Desktop */}
            <div className="absolute top-10 ml-45 sm:left-8">
                <nav className="hidden font-Jockey uppercase sm:text-[25px] md:flex items-center gap-12" aria-label="Principal">
                    {LINKS.map((link, index) => (
                        <a
                            key={index}
                            className="text-white relative cursor-pointer
                after:block after:h-[2px] after:bg-white/0 hover:after:bg-white
                after:transition-all after:w-0 hover:after:w-full after:mt-1"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="relative">
                <IoPersonSharp
                    className="hidden md:block md:absolute md:right-10 md:top-14 z-10
               text-4xl text-white rounded-full p-2 bg-gray-500
               cursor-pointer transition-transform duration-300 hover:scale-105"
                />
            </div>
        </header>
    )
}