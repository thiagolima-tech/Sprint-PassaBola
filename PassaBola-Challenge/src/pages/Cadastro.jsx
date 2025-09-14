import InfoUsers from "../components/InfoUsers";
import Acesso from "../components/Acesso";

export default function () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,#300B74_38%,#5A15DA_100%)]">
      <div className="flex flex-col p-10 gap-10 mx-4 my-20 bg-[#F9F9F9] rounded-4xl h-[759px] md:w-6xl md:h-[759px] md:items-center">
        <h1 className="text-[#300B74] text-[64px] md:mt-10 md:text-[96px]">
          Faça o seu cadastro
        </h1>
        <div className="flex flex-col gap-6">
          <InfoUsers campo="Nome" type="input" />
          <InfoUsers campo="É atleta?" type="select" />
          <InfoUsers campo="Email" type="input" />
          <InfoUsers campo="Senha" type="input" />
        </div>
        <Acesso btn1="LOGIN" btn2="CADASTRAR" />
      </div>
    </div>
  );
}
