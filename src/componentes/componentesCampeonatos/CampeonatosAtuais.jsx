import imagemAnuncioCopa from "../../assets/imagemAnuncioCopa.png";
import Titulo from "../Titulo.jsx";

export default function CampeonatosAtuais() {

  return (
    <section>
      <Titulo title="Campeonatos Atuais" position="start" color="#300B74" />
      <div className="px-10 flex justify-center">
        <img
          src={imagemAnuncioCopa}
          className="m-10 rounded-sm md:w-[70%] cursor-pointer"
          alt="Anuncio Copa Passa a Bola"
        />
      </div>
    </section>
  );
}
