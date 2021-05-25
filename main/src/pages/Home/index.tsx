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
          <img
            src="images/point.png"
            alt="Mulher agendando reserva no restaurante"
          />
        </div>
      </div>
      <FormHelp>
        <h3>Veja alguns estabelecimentos: </h3>
        <section>
          <div className="card">
            <img src="images/restaurante1.jpg" alt="Restaurante Real" />
            <p>Restaurante Real</p>
          </div>
          <div className="card">
            <img src="images/restaurante2.jpg" alt="Lanchonete da Maria" />
            <p>Lanchonete da Maria</p>
          </div>
          <div className="card">
            <img src="images/restaurante3.jpg" alt="Casa Americana" />
            <p>Casa Americana</p>
          </div>
        </section>
      </FormHelp>
      <Footer />
    </Container>
  );
}

export default Home;
