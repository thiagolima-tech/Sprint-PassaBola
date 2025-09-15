import anuncio from "../../assets/imagemAnuncioCopa.png";
import CardNoticia from "../componentesNotícia/CardNoticia";
import DocumentosCopa from "./DocumentosCopa";
import Titulo from "../Titulo";
import fotoMarta from "../../assets/imagemMarta.png";
import fotoLieke from "../../assets/imagemLieke.png";
import fotoChampionsLeague from "../../assets/imagemChampionsLeague.png";
import fotoBola from "../../assets/imagemBolaGol.webp";

export default function CampeonatosAtuais() {
  return (
    <section>
      <Titulo title="Campeonatos Atuais" position="start" color="#300B74" />
      <div className="px-10 flex justify-center">
        <img
          src={anuncio}
          className="m-10 rounded-sm md:w-[70%] cursor-pointer"
          alt="Anuncio Copa Passa a Bola"
        />
      </div>
      <DocumentosCopa />
      <Titulo
        title="Notícias sobre campeonatos"
        position="start"
        color="#300B74"
      />
      <div
        className="flex overflow-x-auto gap-6 px-10 pb-6
                            snap-x snap-mandatory touch-pan-x snap-end no-scrollbar
                            "
      >
        <CardNoticia
          image={fotoBola}
          title="TV Brasil exibe jogos de volta do mata-mata do Brasileirão Feminino"
          text="Neste fim de semana, a TV Brasil exibe dois jogos de volta do mata-mata do Campeonato Brasileiro Feminino de Futebol – Série A3."
        />
        <CardNoticia
          image={fotoLieke}
          title="Lieke Martens"
          text="Ex-melhor do mundo anuncia sua aposentadoria aos 32 anos"
        />
        <CardNoticia
          image={fotoChampionsLeague}
          title="Champions League Feminina"
          text="Champions League Feminina 2025/26: Real Madrid fica muito perto da fase de liga"
        />
        <CardNoticia
          image={fotoMarta}
          title="Marta"
          text='Marcou dois golos na final da Copa America e ajudou o Brasil a conquistar o título, levando o jornal espanhol "Marca" a elogiá-la como "juventude eterna"'
        />
        <CardNoticia
          image={fotoLieke}
          title="Lieke Martens"
          text="Ex-melhor do mundo anuncia sua aposentadoria aos 32 anos"
        />
        <CardNoticia
          image={fotoChampionsLeague}
          title="Champions League Feminina"
          text="Champions League Feminina 2025/26: Real Madrid fica muito perto da fase de liga"
        />
      </div>
    </section>
  );
}
