import { ListaVaga, VagaLink, VagaTitulo } from "./styles";

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <ListaVaga>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localidade: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salario: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(", ")}</li>
    </ul>
    <VagaLink href="#">Ver detVagaLinklhes e candidatar-se</VagaLink>
  </ListaVaga>
);

export default Vaga;
