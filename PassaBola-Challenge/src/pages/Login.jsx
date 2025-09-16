import InfoUsers from "../componentes/InfoUsers";
import Acesso from "../componentes/Acesso";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  let usuarios = [
  {
    email: "vitor@gmail.com",
    senha: "123",
  },
  {
    email: "matheus@gmail.com",
    senha: "321",
  }
]

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Validação simples

    try {
      const storedData = localStorage.getItem('userData');
      const userData = storedData ? JSON.parse(storedData) : null;

      if (userData && userData.email === email && userData.senha === senha) {
        setMensagem('✅ Login bem-sucedido!');
        // Aqui pode redirecionar, por exemplo:
        // navigate('/dashboard');
      } else {
        setMensagem('❌ E-mail ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao acessar o localStorage:', error);
      setMensagem('⚠️ Erro interno. Tente novamente.');
    }
  };

  localStorage.setItem("usuarios", JSON.stringify(usuarios))
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
          <InfoUsers 
            campo="Email" 
            type="input" 
            value={email}
            onChange={(e) => setEmail(e.targert.value)}
          />
          <InfoUsers 
            campo="Senha" 
            type="input"
            value={senha}
            onChange={(e) => setSenha(e.targert.value)}
          />
        </div>

        {mensagem && (
          <p className="mt-2 text-sm text-center text-gray-700">{mensagem}</p>
        )}

        <Acesso btn1="CADASTRAR" route1="/cadastro" btn2="ACESSAR" route2="/" handleLogin={handleLogin} />
      </div>
    </div>
  );
}
