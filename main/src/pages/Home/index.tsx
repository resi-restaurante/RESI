import Footer from '../../components/Footer';
import { Header } from '../../components/Header';

import { Container, FormHelp } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <div className="InitialPage">
        <img src="images/mesa.png" alt="" />
        <h1>Agende agora sua reserva em:</h1>
        <select name="select">
          <option value="city">Aparecida-Sp</option>
        </select>
      </div>
      <FormHelp>
        <h1>Como Funciona ? </h1>
        <section>
          <img src="images/local.svg" alt="" />
          <p>Escolha a cidade</p>
          <img src="images/calendar.svg" alt="" />
          <p>Agende a data de visita</p>
          <img src="images/checked.svg" alt="" />
          <p>Adeus filas </p>
        </section>
      </FormHelp>
      <Footer />
    </Container>
  );
}

export default Home;
