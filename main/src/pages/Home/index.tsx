import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';
import { Navbar } from '../../components';
/* eslint-disable-next-line jsx-a11y/alt-text */

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

// eslint-disable-next-line import/order
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';

import {
  Container,
  FormFuncionalites,
  FormHelp,
  InputContainer,
  SectionPrices,
  Testimonials,
} from './styles';
import Footer from '../../components/Footer';
import CardPrices from '../../components/CardPrices';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function Home() {
  return (
    <Container>
      <Navbar itemVisible />

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
            <Link to="/restaurants">
              <button type="button" className="search-button">
                <FiSearch size={20} color="#fff" />
              </button>
            </Link>
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
        <>
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="images/restaurante1.jpg" alt="Restaurante Real" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/restaurante2.jpg" alt="Restaurante Real" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/restaurante3.jpg" alt="Restaurante Real" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/restaurante1.jpg" alt="Restaurante Real" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/restaurante3.jpg" alt="Restaurante Real" />
            </SwiperSlide>
          </Swiper>
        </>
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

      <SectionPrices>
        <CardPrices />
      </SectionPrices>
      <Testimonials>
        <h2>Quem usou recomendou !!</h2>
        <section>
          <Card
            className="CardOne"
            image="/images/Dono1.jpg"
            header="José Silva"
            meta="Dono de Restaurante"
            description="Muito boa essa plataforma com ela aumentei a 
            quantidade de pessoas que reservam mesas em meu restaurante."
          />
          <Card
            image="/images/restaurant.jpg"
            header="Elisa Santos"
            meta="Cliente"
            description="É Muito simples realizar 
            minhas reservas de mesa sem burocrácia, recomendo a todos "
          />
          <Card
            image="/images/Dono2.jpg"
            header="João Barbosa"
            meta="Dono de Restaurante"
            description="Simplesmente dobrei o número de reservas feitas em
             meu restaurante, a RESI é incrivel!!!"
          />
        </section>
      </Testimonials>
      <Footer />
    </Container>
  );
}
