import Header from "./HeaderHome.jsx";
import TituloSubtitulo from "./TituloSubtitulo.jsx";
import { useState } from "react";

export default function Carrossel({ imagem, titulo, subtitulo }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${imagem})`,
        }}
      >
        <Header menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
        {!menuAberto && (
          <TituloSubtitulo titulo={titulo} subtitulo={subtitulo} />
        )}
      </div>
    </>
  );
}
