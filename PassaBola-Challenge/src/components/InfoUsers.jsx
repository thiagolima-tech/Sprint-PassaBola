export default function ({ campo, type }) {
  return (
    <div>
      <h3>{campo}</h3>
      {type === "select" ? (
        <select>
          <option value="">Selecione...</option>
          <option value="a">Sim</option>
          <option value="b">Não</option>
        </select>
      ) : (
        <input type="text" placeholder={`Digite seu ${campo.toLowerCase()}`} />
      )}
    </div>
  );
}
