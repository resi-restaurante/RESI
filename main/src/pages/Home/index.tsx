import { FiSearch } from 'react-icons/fi';

import Footer from '../../components/Footer';
import { Header } from '../../components/Header';
/* eslint-disable-next-line jsx-a11y/alt-text */
import {
  Container,
  FormFuncionalites,
  FormHelp,
  InputContainer,
} from './styles';

export default function Home() {
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
            id="mulher"
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
      <h1>Como Funciona ?</h1>
      <FormFuncionalites>
        <section className="card">
          <div className="icon">
            <img src="images/local.svg" alt="" />
          </div>
          <h3>Escolha a cidade</h3>
          <span>
            Escolha o melhor restaurante da cidade onde você deseja comer.
          </span>
          <button type="submit">Localizar</button>
        </section>

        <section className="card">
          <div className="icon">
            <img src="images/calendar.svg" alt="" />
          </div>
          <h3>Agende a data de visita</h3>
          <span>
            Escolha a data e a hora de sua reserva com simples cliques.
          </span>
          <button type="submit">Agendar</button>
        </section>

        <section className="card">
          <div className="icon">
            <img src="images/checked.svg" alt="" />
          </div>
          <h3>Adeus filas </h3>
          <span>
            Finalize o pagagamento e <strong>PRONTO! </strong>
            Sua reserva de mesa foi feita com sucesso !
          </span>
          <button type="submit">Finalizar</button>
        </section>
      </FormFuncionalites>

      <Footer />
    </Container>
  );
}
