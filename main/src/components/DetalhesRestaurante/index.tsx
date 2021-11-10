/* eslint-disable jsx-a11y/alt-text */
import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import 'react-multi-date-picker/styles/colors/red.css';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import BotaoTabela from '../BotãoTabela';

import {
  Container,
  ContentRestaurant,
  Title,
  Description,
  Price,
  DatePickerCalendar,
  DatePickerTime,
  Tables,
  ContainerCarrossel,
} from './styles';
import TableItem from '../TableItem';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
function DetalhesRestaurante() {
  return (
    <Container>
      <ContentRestaurant>
        <ContainerCarrossel>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop
            pagination={{
              clickable: true,
            }}
            navigation
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="images/restaurant.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/restaurante.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/restaurante1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/restaurante2.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </ContainerCarrossel>
        <Title>Restaurante Santa Fé</Title>
        <Description>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </Description>
        <Price>R$39,90</Price>
        <p>Por mês</p>

        {/* <Photos>
          <img src="images/restaurante.jpg" alt="" />
          <img src="images/restaurante.jpg" alt="" />
        </Photos> */}
        <Tables>
          <h1>Faça já sua Reserva !!</h1>
          <h2>Escolha o dia:</h2>
          <DatePickerCalendar>
            <DatePicker
              type="input-icon"
              format="DD/MM/YYYY"
              className="red rmdp-mobile"
              inputClass="custom-input"
              weekDays={['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
            />
          </DatePickerCalendar>
          <h2>Escolha sua mesa</h2>
          <section>
            <BotaoTabela />
            <BotaoTabela />
            <BotaoTabela />
            <BotaoTabela />
            <BotaoTabela />
            <BotaoTabela />

            <TableItem chairs={3} />
          </section>
          <DatePickerTime>
            <h3>Horário de entrada:</h3>
            <DatePicker
              disableDayPicker
              inputClass="custom-input"
              format="HH:mm"
              plugins={[<TimePicker hideSeconds />]}
            />
            <h3>Horário de saida:</h3>
            <DatePicker
              disableDayPicker
              inputClass="custom-input"
              format="HH:mm"
              plugins={[<TimePicker hideSeconds />]}
            />
          </DatePickerTime>
          <Link to="/">
            <button className="reserv" type="button">
              Reservar
            </button>
          </Link>
        </Tables>
      </ContentRestaurant>
    </Container>
  );
}

export default DetalhesRestaurante;
