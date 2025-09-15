import Regulamentos from "./Regulamentos";

export default function Documentos() {
  return (
    <div className="ml-4 md:ml-12">
      <h1 className="text-[#300B74] text-[40px] font-Jockey">
        DOCUMENTOS DA COPA
      </h1>
      <hr className="w-[390px] border-[#300B74] mb-4 md:w-[90%]" />
      <Regulamentos />
    </div>
  );
}
