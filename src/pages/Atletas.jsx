import CardAtleta from "../componentes/componentesAtletas/CardAtleta.jsx";
import Titulo from "../componentes/Titulo.jsx";
import fotoJogadora from "../assets/imagemjogadora.png"
import fotoJogadora2 from "../assets/imagemjogadora2.jpg"
import fotoJogadora3 from "../assets/imagemjogadora3.jpg"
import fotoJogadora4 from "../assets/imagemjogadora4.jpg"

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
                    image={fotoJogadora}
                    nome="Camila Dantas"
                    idade="22"
                    posicao="Volante"
                    gols="10"
                    clube="Time A"
                />
                <CardAtleta
                    image={fotoJogadora2}
                    nome="Alexia Putellas"
                    idade="28"
                    posicao="Meia"
                    gols="20"
                    clube="Time B"
                />
                <CardAtleta
                    image={fotoJogadora3}
                    nome="Debinha"
                    idade="27"
                    posicao="Atacante"
                    gols="17"
                    clube="Time C"
                />
                <CardAtleta
                    image={fotoJogadora4}
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