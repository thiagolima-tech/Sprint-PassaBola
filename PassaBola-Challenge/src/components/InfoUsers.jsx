export default function ({ campo, type }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[#300B74] text-[25px]">{campo}</h3>
      {type === "select" ? (
        <select className="text-[16px] text-[#736B81] border-[0.5px] rounded-full p-2 border-[#A7A7A7]">
          <option value="" disabled selected>
            Selecione...
          </option>
          <option value="a">Sim</option>
          <option value="b">Não</option>
        </select>
      ) : (
        <input
          className="text-[16px] text-[#736B81] border-[0.5px] rounded-full p-2 border-[#A7A7A7] placeholder:text-[16px]"
          type="text"
          placeholder={`Digite seu ${campo.toLowerCase()}`}
        />
      )}
    </div>
  );
}
