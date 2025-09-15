import Titulo from "../Titulo";
import fotoMarta from "../../assets/imagemMarta.png";
import fotoLieke from "../../assets/imagemLieke.png";
import fotoChampionsLeague from "../../assets/imagemChampionsLeague.png"
import CardNoticia from "./CardNoticia";


export default function Noticias() {
    return (
        <>
            <section className="h-100 bg-white my-4">
                <Titulo
                    title="Notícias"
                    position="start"
                    color="#300B74"
                />
                <div className="flex overflow-x-auto gap-6 px-4
                snap-x snap-mandatory touch-pan-x snap-end no-scrollbar
                ">
                    <CardNoticia
                        image={fotoMarta}
                        title="Marta"
                        text='Marcou dois golos na final da Copa America e ajudou o Brasil a conquistar o título, levando o jornal espanhol "Marca" a elogiá-la como "juventude eterna"'
                    />
                    <CardNoticia
                        image={fotoLieke}
                        title="Lieke Martens"
                        text='Ex-melhor do mundo anuncia sua aposentadoria aos 32 anos'
                    />
                    <CardNoticia
                        image={fotoChampionsLeague}
                        title="Champions League Feminina"
                        text='Champions League Feminina 2025/26: Real Madrid fica muito perto da fase de liga'
                    />
                    <CardNoticia
                        image={fotoMarta}
                        title="Marta"
                        text='Marcou dois golos na final da Copa America e ajudou o Brasil a conquistar o título, levando o jornal espanhol "Marca" a elogiá-la como "juventude eterna"'
                    />
                    <CardNoticia
                        image={fotoLieke}
                        title="Lieke Martens"
                        text='Ex-melhor do mundo anuncia sua aposentadoria aos 32 anos'
                    />
                    <CardNoticia
                        image={fotoChampionsLeague}
                        title="Champions League Feminina"
                        text='Champions League Feminina 2025/26: Real Madrid fica muito perto da fase de liga'
                    />
                </div>
            </section>
        </>
    )
}