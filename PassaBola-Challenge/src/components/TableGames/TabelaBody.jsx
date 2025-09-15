export default function TabelaBody({
  cor,
  time,
  posicao,
  v,
  e,
  d,
  sg,
  ca,
  cv,
  pontos,
  jogos,
}) {
  return (
    <tr style={{ backgroundColor: cor }}>
      <td
        className="px-4 py-2 sticky left-0"
        style={{
          width: "140px",
          minWidth: "140px",
          backgroundColor: cor,
          zIndex: 10,
        }}
      >
        <div className="flex justify-between mr-4">
          <p>{posicao + 1}</p>
          <p>{time}</p>
        </div>
      </td>
      <td className="px-4 py-2 text-center">{pontos}</td>
      <td className="px-4 py-2 text-center">{jogos}</td>
      <td className="px-4 py-2 text-center">{v}</td>
      <td className="px-4 py-2 text-center">{e}</td>
      <td className="px-4 py-2 text-center">{d}</td>
      <td className="px-4 py-2 text-center">{sg}</td>
      <td className="px-4 py-2 text-center">{ca}</td>
      <td className="px-4 py-2 text-center">{cv}</td>
    </tr>
  );
}
