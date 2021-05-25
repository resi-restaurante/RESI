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
          <h1>
            Agende agora
            <br /> sua <b style={{ color: '#e53935' }}>reserva</b> em:
          </h1>
          <h3>
            Pesquise restaurantes pela cidade mais próxima <br />
            ou para uma próxima viagem
          </h3>
          <InputContainer>
            <button type="button" className="get-start">
              <p>Como começar</p>
            </button>
            <input
              name="email"
              placeholder="Pesquise pela cidade"
              style={{ width: '100%' }}
            />
            <button type="button" className="search-button">
              <FiSearch size={20} color="#fff" />
            </button>
          </InputContainer>
        </div>
        <div id="image-container">
          {/* <img src="images/mesa.svg" alt="" /> */}
          <img
            src="images/point.png"
            alt="Mulher agendando reserva no restaurante"
          />
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
