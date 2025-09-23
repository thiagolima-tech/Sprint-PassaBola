import InfoUsers from "../componentes/InfoUsers.jsx";
import Acesso from "../componentes/Acesso.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (email, senha) => {
    const storedData = localStorage.getItem('profiles');
    const profiles = storedData ? JSON.parse(storedData) : [];

    const userFound = profiles.find(
      (profile) => profile.email === email && profile.senha === senha
    );
    console.log(userFound)
    if (userFound) {
      if (confirm(`Você é mesmo ${userFound.nome.toUpperCase()}?`)){
      navigate('/');} 
    } else {
      alert('Não encontrado')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,#300B74_38%,#5A15DA_100%)] md:bg-[url('/mosaic-bg.png')] bg-cover bg-center md:bg-cover md:bg-center">
      <div className="flex flex-col p-10 gap-10 mx-4 my-20 bg-[#F9F9F9] rounded-4xl h-[759px] md:w-6xl md:h-[759px] md:items-center">
        <Link to="/" className="flex self-start">
          <FaArrowLeft size={30} />
        </Link>

        <h1 className="font-Jockey text-[#300B74] text-[64px] md:mt-10 md:text-[96px]">
          Faça o seu login
        </h1>

        <div className="flex flex-col gap-6">
          <InfoUsers 
            campo="Email" 
            type="input" 
            change={(e) => setEmail(e.target.value)}
          />
          <InfoUsers 
            campo="Senha" 
            type="input"
            change={(e) => setSenha(e.target.value)}
          />
        </div>

        <Acesso btn1="CADASTRAR" route1="/cadastro" btn2="ACESSAR" handle={() => handleLogin(email, senha)} />
      </div>
    </div>
  );
}
