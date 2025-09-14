import InfoUsers from "../components/InfoUsers";
import Acesso from "../components/Acesso";

export default function () {
  return (
    <>
      <div>
        <h1>Faça o seu cadastro</h1>
        <div>
          <InfoUsers campo="Nome" type="input" />
          <InfoUsers campo="É atleta?" type="select" />
          <InfoUsers campo="Email" type="input" />
          <InfoUsers campo="Senha" type="input" />
        </div>
        <Acesso btn1="LOGIN" btn2="CADASTRAR" />
      </div>
    </>
  );
}
