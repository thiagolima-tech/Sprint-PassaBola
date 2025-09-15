import InfoUsers from "../componentes/InfoUsers";
import Acesso from "../componentes/Acesso";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,#300B74_38%,#5A15DA_100%)] md:bg-[url('./mosaic-bg.png')] bg-cover bg-center md:bg-cover md:bg-center">
      <div className="flex flex-col p-10 gap-10 mx-4 my-20 bg-[#F9F9F9] rounded-4xl h-[759px] md:w-6xl md:h-[759px] md:items-center">
        <Link to="/" className="flex self-start">
          <FaArrowLeft size={30} />
        </Link>
        <h1 className="font-Jockey text-[#300B74] text-[64px] md:mt-10 md:text-[96px]">
          Faça o seu login
        </h1>
        <div className="flex flex-col gap-6">
          <InfoUsers campo="Email" type="input" />
          <InfoUsers campo="Senha" type="input" />
        </div>
        <Acesso btn1="CADASTRAR" route1="/cadastro" btn2="ACESSAR" route2="/" />
      </div>
    </div>
  );
}
