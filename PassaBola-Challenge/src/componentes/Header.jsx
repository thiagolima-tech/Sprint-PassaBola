import fundoHeader from "../assets/imagemHeader.png"
import logo from "../assets/Logotipo-PassaBola-Branco.png"
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

export default function Header({ menuAberto, setMenuAberto }) {

    const LINKS = [
        { name: "Home" },
        { name: "Campeonatos" },
        { name: "Jogos" },
        { name: "Atletas" },
    ];

    return (
        <>
            <header className="h-20 md:h-26 bg-cover"
                style={{
                    backgroundImage: `url(${fundoHeader})`,
                }}>
                <div className="py-3 px-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            onClick={() => setMenuAberto(!menuAberto)}
                            className="absolute md:hidden text-white z-50"
                        >
                            {menuAberto ? <IoMdClose size={46} /> : <IoMdMenu size={46} />}
                        </button>
                        <a href="">
                            <IoPersonSharp
                                className={`absolute left-20 top-5.5 md:hidden z-10
                                            text-4xl text-white rounded-full p-2 bg-gray-400
                                            ${menuAberto ? "opacity-100" : "opacity-0"}
                                            `}
                            />
                        </a>
                    </div>
                    <img src={logo} alt="Logotipo Passa a bola" className="w-14 z-50 md:absolute top-3 left-10 md:w-20 hover:scale-105 duration-300 cursor-pointer" />
                </div>

                <div className={`absolute md:hidden top-0 left-0 w-full h-screen bg-[#561EBD] flex flex-col items-center gap-6 text-2xl uppercase transform transition-transform ${menuAberto ? "opacity-100" : "opacity-0"}`}
                    style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
                >
                    <div className="absolute top-20 left-5">
                        {LINKS.map((link, index) => (
                            <li key={index}
                                className="list-none w-full text-start text-white font-Jockey p-4 hover:bg-[#2e1165] transition-all cursor-pointer">{link.name}</li>
                        ))}
                    </div>
                </div>


                {/* Header Desktop */}
                <div className="absolute top-8 ml-45 sm:left-14">
                    <nav className="hidden font-Jockey uppercase sm:text-[25px] md:flex items-center gap-12" aria-label="Principal">
                        {LINKS.map((link, index) => (
                            <a key={index}
                                className="text-white relative cursor-pointer
                                    after:block after:h-[2px] after:bg-white/0 hover:after:bg-white
                                    after:transition-all after:w-0 hover:after:w-full after:mt-1">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="relative">
                    <IoPersonSharp
                        className="hidden md:block md:absolute md:right-4 lg:right-18 md:top-2 z-10
               text-4xl text-white rounded-full p-2 bg-gray-400
               cursor-pointer transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </header>
        </>
    )
}