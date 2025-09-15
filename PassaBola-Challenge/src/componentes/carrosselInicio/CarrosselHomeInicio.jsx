import Carrossel from "./Carrossel";
import campo from "../../assets/ImagemCampoFutebol.png";

export default function CarrosselHomeInicio() {
    return (
        <>
            <Carrossel 
                imagem={campo}
                titulo="Notícias sobre futebol feminino e copas futuras do Passa a Bola"
                subtitulo="Tudo sobre o futebol!"
            />
        </>
    )
}