import InfoUsers from "../componentes/InfoUsers.jsx";
import Acesso from "../componentes/Acesso.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [atleta, setAtleta] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate()

  function handleNewProfile(nome, atleta, email, senha, route) {
    const profile = {"nome":nome,"atleta":atleta,"email":email,"senha":senha}
    const profiles = localStorage.getItem('profiles') ? JSON.parse(localStorage.getItem('profiles')) : []
    profiles.push(profile)
    
    localStorage.setItem('profiles', JSON.stringify(profiles))
    navigate(route)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,#300B74_38%,#5A15DA_100%)] md:bg-[url('/mosaic-bg.png')] bg-cover bg-center md:bg-cover md:bg-center">
      <div className="flex flex-col p-10 gap-2 mx-4 my-20 bg-[#F9F9F9] rounded-4xl pb-[60px] md:w-6xl md:items-center">
        <Link to="/" className="flex self-start">
        <Link to="/" className="flex self-start">
          <FaArrowLeft size={30} />
        </Link>
        </Link>
        <h1 className="font-Jockey text-[#300B74] text-[64px] md:mt-10 md:text-[96px]">
          Faça o seu cadastro
        </h1>
        <div className="flex flex-col gap-6">
          <InfoUsers campo="Nome" type="input" change={(e) => setNome(e.target.value)}/>
          <InfoUsers campo="É atleta?" type="select" change={(e) => setAtleta(e.target.value)}/>
          <InfoUsers campo="Email" type="input" change={(e) => setEmail(e.target.value)}/>
          <InfoUsers campo="Senha" type="input" change={(e) => setSenha(e.target.value)}/>
        </div>
        <Acesso btn1="LOGIN" route1="/login" btn2="CADASTRAR" handle={() => handleNewProfile(nome, atleta, email, senha, "/login")}/>
      </div>
    </div>
  );
}
