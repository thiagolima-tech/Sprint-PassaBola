import Titulo from "../Titulo.jsx";
import CardNoticia from "./CardNoticia.jsx";
import { useEffect, useState } from "react";


export default function Noticias() {

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
        <>
            <section className="bg-white my-10">
                <Titulo
                    title="Notícias"
                    position="start"
                    color="#300B74"
                />
                <div className="flex flex-wrap justify-around">
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
        </>
    )
}