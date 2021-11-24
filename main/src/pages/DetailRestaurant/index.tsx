/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { FiMail, FiPhoneCall, FiExternalLink } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BiFoodMenu } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import { Footer, Button, Navbar, SelectInput } from '../../components';

import {
  Container,
  ContentRestaurant,
  Title,
  Adress,
  Description,
  RestaurantGrid,
  InformationContainer,
  ContainerCarrossel,
  Table,
  DatePickerCalendar,
  DatePickerTime,
  TableSection,
} from './styles';

import { supabase } from '../../supabase';
import RestaurantData from '../../hooks/dtos/Restaurant';
import TableItem from '../../components/TableItem';

interface TableData {
  qtd_cadeiras: number;
  mesa_id: number;
  descricao: string;
}
function DetailRestaurant() {
  // const [restaurantInfo, setRestaurantInfo] = useState({} as RestaurantData);

  // useEffect(() => {
  //   setRestaurantInfo(props.location.state);
  // }, []);

  const [restaurante, setRestaurante] = useState<any[] | null>();
  const [mesa, setMesa] = useState<any[]>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Dados();
  }, []);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Tables();
  }, []);

  const { id }: { id?: number | string | null } = useParams();
  async function Dados() {
    const { data } = await supabase
      .from('restaurants')
      .select('*')
      .in('restaurante_id', [id]);

    if (data) {
      setRestaurante(data);
    }
  }
  async function Tables() {
    const { data } = await supabase
      .from('mesas')
      .select('*')
      .in('mesa_id', [id]);
    console.log(data);
    if (data) {
      setMesa(data);
    }
  }
  SwiperCore.use([Pagination, Navigation]);
  return (
    <Container>
      <Navbar itemVisible={false} />
      {restaurante?.map((restaurant: RestaurantData) => (
        <>
          <RestaurantGrid>
            <Title>{restaurant.nome}</Title>
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
                  <img
                    src="https://vinicolaaraucaria.com.br/wp-content/uploads/2020/06/interna_restaurante-1-1400x700.jpg "
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://pesweb.azureedge.net/spimg/restaurantphotos/5-star-hotel-porto-restaurant-details-new.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=775&h=530&mode=crop"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://backoffice.vilavitaparc.com/sites/default/files/styles/heroimg/public/2021-01/atlantico-restaurant.jpg?itok=y9QvugOZ"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://backoffice.vilavitaparc.com/sites/default/files/styles/heroimg/public/restaurants/Bela%20Vita-web.jpg?itok=UsBgiPcA"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </ContainerCarrossel>
            <ContentRestaurant>
              <div>
                <Adress>
                  <p>
                    <FiMapPin size={16} color="#e53935" />
                    <strong> Endereço: </strong>
                    {restaurant.rua_avenida}, {restaurant.cidade}-{' '}
                    {restaurant.estado}
                  </p>
                  <a
                    href="https://www.google.com/maps/search/restaurant+augusto+aparecida+sp"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FiExternalLink size={15} />
                  </a>

                  <Description>
                    <BiFoodMenu size={16} color="#e53935" />
                    {restaurant.descricao}
                  </Description>
                </Adress>
              </div>
            </ContentRestaurant>
            <InformationContainer>
              <div>
                <FiMail size={25} />
                <p>{restaurant.email}</p>
              </div>
              <div>
                <AiOutlineWhatsApp size={25} />
                <p>{restaurant.telefone}</p>
              </div>
            </InformationContainer>
          </RestaurantGrid>
        </>
      ))}

      <div>
        <Table>
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
          <DatePickerTime>
            <h3>Horário de entrada:</h3>
            <DatePicker
              disableDayPicker
              inputClass="custom-input"
              format="HH:mm"
              plugins={[<TimePicker hideSeconds />]}
            />
          </DatePickerTime>
          <h2>Selecione a quantidade de pessoas</h2>
          <SelectInput />
          <h2>Escolha sua mesa</h2>
          <div className="tableChairs">
            <p>Mesas Vazias:</p>
            <span className="empty-table" />
            <p>Mesas Cheias:</p>
            <span className="full-table" />
          </div>
          <TableSection>
            {mesa?.map((table: TableData) => (
              <>
                <TableItem
                  chairs={table.qtd_cadeiras}
                  numberTable={table.mesa_id}
                  description={table.descricao}
                />
                <TableItem
                  chairs={table.qtd_cadeiras}
                  numberTable={table.mesa_id}
                  description={table.descricao}
                />
                <TableItem
                  chairs={table.qtd_cadeiras}
                  numberTable={table.mesa_id}
                  description={table.descricao}
                />
                <TableItem
                  chairs={table.qtd_cadeiras}
                  numberTable={table.mesa_id}
                  description={table.descricao}
                />
                <TableItem
                  chairs={table.qtd_cadeiras}
                  numberTable={table.mesa_id}
                  description={table.descricao}
                />
              </>
            ))}
          </TableSection>

          <Link to="/">
            <button className="reserv" type="button">
              Reservar
            </button>
          </Link>
        </Table>
      </div>

      <Footer />
    </Container>
  );
}

export default DetailRestaurant;
