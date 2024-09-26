import { FormEvent, useState } from "react";
import { BtnForm, Form, Input } from "./style";

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>("");

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <Form onSubmit={aoEnviarForm}>
      <Input
        type="search"
        placeholder="Front-end, Fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
      />
      <BtnForm type="submit">Pesquisar</BtnForm>
    </Form>
  );
};

export default FormVagas;
