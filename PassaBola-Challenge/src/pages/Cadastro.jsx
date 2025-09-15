import InfoUsers from "../componentes/InfoUsers";
import Acesso from "../componentes/Acesso";
import InfoUsers from "../componentes/InfoUsers";
import Acesso from "../componentes/Acesso";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [atleta, setAtleta] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleNewProfile(nome, atleta, email, senha) {
    const profile = {"nome":nome,"atleta":atleta,"email":email,"senha":senha}
    localStorage.setItem('profiles', JSON.stringify(profile))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,#300B74_38%,#5A15DA_100%)] md:bg-[url('./mosaic-bg.png')] bg-cover bg-center md:bg-cover md:bg-center">
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
        <Acesso btn1="LOGIN" route1="/login" btn2="CADASTRAR" route2="/" />
        <Acesso btn1="LOGIN" route1="/login" btn2="CADASTRAR" route2="/" />
      </div>
    </div>
  );
}
