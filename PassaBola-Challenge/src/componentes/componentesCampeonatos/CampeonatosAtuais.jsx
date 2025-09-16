import anuncio from "../../assets/imagemAnuncioCopa.png";
import CardNoticia from "../componentesNotícia/CardNoticia.jsx";
import DocumentosCopa from "./DocumentosCopa.jsx";
import Titulo from "../Titulo.jsx";
import { useEffect, useState } from "react";

export default function CampeonatosAtuais() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;

    fetch('https://68c98d52ceef5a150f654bb1.mockapi.io/passaBola/v1/news', {
      method: 'GET'
    })
      .then((r) => {
        if (!r.ok) throw new Error("Falha ao buscar notícias");
        return r.json();
      })
      .then((json) => { if (alive) setNews(json); })
      .catch((e) => { if (alive) setError(e); })
      .finally(() => { if (alive) setLoading(false); });

    return () => { alive = false; };
  }, [])

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
        className="flex overflow-x-auto gap-6 mb-2 px-10 no-scroll"
      >
        {news.map((n) => (
          <CardNoticia
            key={n.id}
            image={n.image}
            title={n.title}
            subtitle={n.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
