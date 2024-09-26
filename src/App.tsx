import Cabecalho from "./components/Header";
import Hero from "./components/Hero";
import ListaVagas from "./containers";
import GlobalEstyle, { Container } from "./style";

function App() {
  return (
    <>
      <GlobalEstyle />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  );
}

export default App;
