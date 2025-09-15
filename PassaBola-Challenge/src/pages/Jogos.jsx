import copasVerde from "../assets/copas-verde.png";
import TabelaHead from "../components/TableGames/TabelaHead";
import TabelaBody from "../components/TableGames/TabelaBody";

export default function Jogos() {
  const times = [
    { time: "Time A", v: 3, e: 1, d: 0, sg: 5, ca: 1, cv: 0 },
    { time: "Time B", v: 10, e: 2, d: 0, sg: 4, ca: 2, cv: 0 },
    { time: "Time C", v: 1, e: 1, d: 2, sg: 2, ca: 5, cv: 0 },
    { time: "Time A", v: 3, e: 1, d: 0, sg: 5, ca: 1, cv: 0 },
    { time: "Time B", v: 10, e: 2, d: 0, sg: 4, ca: 2, cv: 0 },
    { time: "Time C", v: 1, e: 1, d: 2, sg: 2, ca: 5, cv: 0 },
    { time: "Time A", v: 3, e: 1, d: 0, sg: 5, ca: 1, cv: 0 },
    { time: "Time B", v: 10, e: 2, d: 0, sg: 4, ca: 2, cv: 0 },
    { time: "Time C", v: 1, e: 1, d: 2, sg: 2, ca: 5, cv: 0 },
  ];

  function jogosTotais(time) {
    return time.v + time.e + time.d;
  }

  function pntsTotais(time) {
    return time.v * 3 + time.e;
  }

  const timesOrdenados = times
    .map((time) => ({
      ...time,
      jogos: jogosTotais(time),
      pontos: pntsTotais(time),
    }))
    .sort((a, b) => {
      if (b.pontos !== a.pontos) return b.pontos - a.pontos;
      const saldoA = a.sg - a.ca;
      const saldoB = b.sg - b.ca;
      return saldoB - saldoA;
    });

  return (
    <div>
      <div className="ml-4">
        <img className="w-20" src={copasVerde} alt="" />
        <h1 className="text-[#300B74] text-[50px] font-Jockey">
          COPA PASSA A BOLA
        </h1>
        <hr className="w-[390px] border-[#300B74]" />
        <h2 className="text-[#300B74] text-[30px] mt-5 font-Jockey">Grupo</h2>
      </div>
      <div className="overflow-x-auto m-2">
        <table className="text-[16px] min-w-full border-collapse">
          <TabelaHead />
          <tbody className="font-Jockey text-[#19063C] text-sm text-[20px]">
            {timesOrdenados.map((time, index) => (
              <TabelaBody
                key={time.time}
                cor={index % 2 === 0 ? "#D9D9D9" : "#FFFFFF"}
                posicao={index}
                time={time.time}
                v={time.v}
                e={time.e}
                d={time.d}
                sg={time.sg}
                ca={time.ca}
                cv={time.cv}
                pontos={time.pontos}
                jogos={time.jogos}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  );
}
