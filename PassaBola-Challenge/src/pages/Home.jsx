import CarrosselHomeInicio from "../componentes/carrosselInicio/CarrosselHomeInicio";
import Jogos from "../componentes/componentesJogos/Jogos";
import Noticias from "../componentes/componentesNotícia/Noticias";
import SobreNos from "../componentes/componentesSobreNos/SobreNos";
import Footer from "../componentes/Footer";
import Patrocinadores from "../componentes/Patrocinadores";

export default function Home() {
  return (
    <>
      <div className="mb-20">
        <CarrosselHomeInicio />
        <Noticias />
        <Jogos />
        <SobreNos />
        <Patrocinadores />
      </div>
      <Footer />
    </>
  );
}
