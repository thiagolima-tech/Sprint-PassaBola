import Titulo from "../Titulo";
import fotoMeninas from "../../assets/imagemMeninasPB.png"

export default function SobreNos() {
    return (
        <>
            <Titulo
                title="Quem é o passa a bola?"
                position="center"
                color="#300B74"
            />
            <div className="px-8 pb-8">
                <p className="font-Raleway text-[16px] text-left text-[#4D4D4E]">A Passa a Bola é uma plataforma digital inovadora e um ecossistema completo dedicado ao futebol amador. Nossa missão é simplificar a organização, a comunicação e a experiência de todos os envolvidos no esporte, desde os jogadores e organizadores de times até ligas e clubes.</p>

                <div className="flex justify-center my-10 lg:justify-endg">
                    <img src={fotoMeninas} alt={fotoMeninas} className="w-[80%] lg:w-[30%]" />
                </div>

                <p className="font-Raleway text-[16px] text-left text-[#4D4D4E]">A Passa a Bola nasceu da paixão pelo futebol e da percepção da necessidade de profissionalizar a gestão do esporte amador, tornando-o mais acessível, divertido e organizado para todos. Somos o elo que conecta a paixão pela bola com a tecnologia, garantindo que a única preocupação em campo seja o jogo em si.</p>
            </div>
        </>
    )
}