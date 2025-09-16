import Titulo from "../Titulo.jsx";
import jogo1 from "../../assets/TimeAxTimeB.png"
import jogo2 from "../../assets/TimeCxTimeD.png"
import jogo3 from "../../assets/TimeExTimeF.png"
import CardJogos from "./CardJogos.jsx";

export default function Jogos() {
    return (
        <>
            <section className="h-254 md:h-314 lg:h-130 mt-4 bg-gradient-to-r from-[#2C086E] via-[#540FD4] to-[#300B74]">
                <div className="p-4 md:mt-18">
                    <Titulo
                        title="Jogos"
                        position="center"
                        color="#f8f8f8"
                    />
                    <div className="flex flex-col lg:flex-row justify-between">
                        <CardJogos
                            image={jogo1}
                            text="Este sábado"
                        />
                        <CardJogos
                            image={jogo2}
                            text="Dia 24/09"
                        />
                        <CardJogos
                            image={jogo3}
                            text="Dia 30/09"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}