export default function InfoUsers({ campo, type }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-Jockey text-[#300B74] text-[25px] md:text-[23px]">
        {campo}
      </h3>
      {type === "select" ? (
        <select className="font-Raleway text-[16px] text-[#736B81] border-[0.5px] rounded-full p-2 border-[#A7A7A7] md:text-[25px]">
          <option value="" disabled selected>
            Selecione...
          </option>
          <option value="a">Sim</option>
          <option value="b">Não</option>
        </select>
      ) : (
        <input
          className="font-Raleway text-[16px] text-[#736B81] border-[0.5px] rounded-full p-2 border-[#A7A7A7] placeholder:text-[16px] md:text-[25px] md:placeholder:text-xl md:w-2xl"
          type="text"
          placeholder={`Digite seu ${campo.toLowerCase()}`}
        />
      )}
    </div>
  );
}
