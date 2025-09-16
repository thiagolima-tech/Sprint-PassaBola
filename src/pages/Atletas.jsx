import CardAtleta from "../componentes/componentesAtletas/CardAtleta.jsx";
import Titulo from "../componentes/Titulo.jsx";
import fotojogadora from "../assets/imagemjogadora.png"
import fotojogadora2 from "../assets/imagemjogadora2.jpg"
import fotojogadora3 from "../assets/imagemjogadora3.jpg"
import fotojogadora4 from "../assets/imagemjogadora4.jpg"

export default function Atletas() {

    return (
        <>
            
            <Titulo
                title="Atletas Destaque"
                position="start"
                color="#300B74"
            />
            <div className="m-10">
                <CardAtleta
                    image={fotojogadora}
                    nome="Camila Dantas"
                    idade="22"
                    posicao="Volante"
                    gols="10"
                    clube="Time A"
                />
                <CardAtleta
                    image={fotojogadora2}
                    nome="Alexia Putellas"
                    idade="28"
                    posicao="Meia"
                    gols="20"
                    clube="Time B"
                />
                <CardAtleta
                    image={fotojogadora3}
                    nome="Debinha"
                    idade="27"
                    posicao="Atacante"
                    gols="17"
                    clube="Time C"
                />
                <CardAtleta
                    image={fotojogadora4}
                    nome="Racheal Kundananji"
                    idade="23"
                    posicao="Atacante"
                    gols="11"
                    clube="Time D"
                />
            </div>
        </>
    )
}