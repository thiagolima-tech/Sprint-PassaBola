import BtnDocs from "./BtnDocs";
import Titulo from "../Titulo";

export default function DocumentosCopa() {
  return (
    <>
      <Titulo title="Documentos da copa" position="start" color="#300B74" />
      <div className="mx-10 h-0.5 bg-[#300B74] flex md:h-0.5" />
      <div className="flex flex-wrap">
        <BtnDocs text="Documentos " />
        <BtnDocs text="Regulamento Geral " />
      </div>
    </>
  );
}
