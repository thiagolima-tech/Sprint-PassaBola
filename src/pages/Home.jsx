import Carrossel from "../componentes/carrosselInicio/Carrossel.jsx";
import Jogos from "../componentes/componentesJogos/Jogos.jsx";
import Noticias from "../componentes/componentesNotícia/Noticias.jsx";
import SobreNos from "../componentes/componentesSobreNos/SobreNos.jsx";
import Footer from "../componentes/Footer.jsx";
import Patrocinadores from "../componentes/Patrocinadores.jsx";

export default function Home() {
  return (
    <>
        <Carrossel />
        <Noticias />
        <Jogos />
        <SobreNos />
        <Patrocinadores />
      <Footer />
    </>
  );
}
