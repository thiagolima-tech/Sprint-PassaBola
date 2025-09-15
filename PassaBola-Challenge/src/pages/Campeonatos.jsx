import { useState } from "react";
import Header from "../componentes/Header";
import CampeonatosAtuais from "../componentes/componentesCampeonatos/CampeonatosAtuais";

export default function Campeonatos() {

    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <>
            <Header menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
            <CampeonatosAtuais />
        </>
    )
}