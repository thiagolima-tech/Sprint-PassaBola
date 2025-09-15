import CarrosselHomeInicio from "../componentes/carrosselInicio/CarrosselHomeInicio";
import Jogos from "../componentes/componentesJogos/Jogos";
import Noticias from "../componentes/componentesNotícia/Noticias";
import SobreNos from "../componentes/componentesSobreNos/SobreNos";

export default function Home (){
    return (
        <>
            <CarrosselHomeInicio />
            <Noticias />
            <Jogos />
            <SobreNos />
        </>
    )
}