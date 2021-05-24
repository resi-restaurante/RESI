import { FiSearch } from 'react-icons/fi';
import Footer from '../../components/Footer';
import { Header } from '../../components/Header';

import { Container, FormHelp, InputContainer } from './styles';

function Home() {
  return (
    <Container>
      <Header />

      <div className="InitialPage">
        <div>
          <img src="images/mesa.png" alt="" />
        </div>
        <div>
          <h1>Agende agora</h1>
          <h1>&nbsp;&nbsp;sua reserva em:</h1>
          <InputContainer>
            <input
              name="email"
              placeholder="Pesquise pela cidade"
              style={{ width: '100%' }}
            />
            <button type="button">
              <FiSearch size={20} color="#fff" />
            </button>
          </InputContainer>
        </div>
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
