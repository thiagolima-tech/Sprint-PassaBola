import Titulo from "../Titulo";
import fotoMeninas from "../../assets/imagemMeninasPB.png"

export default function SobreNos() {
    return (
        <>
            <div className="lg:hidden">
                <Titulo
                    title="Quem é o passa a bola?"
                    position="center"
                    color="#300B74"
                />

                <div className="px-8 pb-8">

                    <p className="font-Raleway text-[16px] text-left text-[#4D4D4E] lg:hidden">A Passa a Bola é uma plataforma digital inovadora e um ecossistema completo dedicado ao futebol amador. Nossa missão é simplificar a organização, a comunicação e a experiência de todos os envolvidos no esporte, desde os jogadores e organizadores de times até ligas e clubes.</p>

                    <div className="flex justify-center my-10 lg:justify-end">
                        <img src={fotoMeninas} alt={fotoMeninas} className="w-[80%] lg:w-[30%]" />
                    </div>

                    <p className="font-Raleway text-[16px] text-left text-[#4D4D4E] lg:hidden">A Passa a Bola nasceu da paixão pelo futebol e da percepção da necessidade de profissionalizar a gestão do esporte amador, tornando-o mais acessível, divertido e organizado para todos. Somos o elo que conecta a paixão pela bola com a tecnologia, garantindo que a única preocupação em campo seja o jogo em si.</p>
                </div>
            </div>

            <div className="hidden h-180 lg:flex">
                <div className="absolute my-18 mx-40">
                    <Titulo
                        title="Quem é o passa a bola?"
                        position="center"
                        color="#300B74"
                    />
                </div>
                <p className="absolute my-44 ml-40 font-Raleway text-[20px] w-130 text-left text-[#4D4D4E]">A Passa a Bola é uma plataforma digital inovadora e um ecossistema completo dedicado ao futebol amador. Nossa missão é simplificar a organização, a comunicação e a experiência de todos os envolvidos no esporte, desde os jogadores e organizadores de times até ligas e clubes.
                    <br/>
                    <br/>
                    A Passa a Bola nasceu da paixão pelo futebol e da percepção da necessidade de profissionalizar a gestão do esporte amador, tornando-o mais acessível, divertido e organizado para todos. Somos o elo que conecta a paixão pela bola com a tecnologia, garantindo que a única preocupação em campo seja o jogo em si.
                </p>

                <div className="my-35 ml-185 mr-5">
                    <img src={fotoMeninas} alt={fotoMeninas} className="w-[500px] min-w-[300px] h-auto shrink-0"/>
                </div>
            </div>
        </>
    )
}