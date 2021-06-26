import { useState } from 'react';
import { FiHome, FiCalendar, FiSearch } from 'react-icons/fi';
import {
  Container,
  RedContainer,
  CardUserInformationContainer,
  SelectionMenu,
  ContentContainer,
  ListContainer,
  ScrollView,
} from './styles';
import {
  Header,
  CardListAppointment,
  CardListCompanys,
  InputWithOutForm,
  Footer,
} from '../../components';
import profileAvatar from '../../assets/images/profile.jpg';
import Modal from '../../components/Modal';
import { useAuth } from '../../hooks/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();

  const [showSchedule, setShowSchedule] = useState(true);
  const [showCompanys, setShowCompanys] = useState(false);

  const handleDisableContainer = (containerType: string) => {
    if (containerType === 'schedule') {
      setShowSchedule(true);
      setShowCompanys(false);
    } else {
      setShowSchedule(false);
      setShowCompanys(true);
    }
  };

  return (
    <Container>
      <Header />
      <RedContainer>
        <CardUserInformationContainer>
          <div>
            <img src={profileAvatar} alt="Foto do usuário" />
          </div>
          <div>
            <h3>
              {user.nome}#{user.id}
            </h3>
            <h3 id="user-email">{user.email}</h3>
          </div>
        </CardUserInformationContainer>
        <SelectionMenu>
          <ContentContainer
            onPressContent={showSchedule}
            onClick={() => handleDisableContainer('schedule')}
          >
            <FiCalendar size={20} />
            <h3>Agendamentos</h3>
            <Modal />
          </ContentContainer>
          <ContentContainer
            onPressContent={showCompanys}
            onClick={() => handleDisableContainer('companys')}
          >
            <FiHome size={20} />
            <h3>Companhias</h3>
          </ContentContainer>
        </SelectionMenu>
      </RedContainer>
      {showSchedule && (
        <ListContainer>
          <header>
            <h1>Pesquise aqui por seus agendamentos</h1>
            <InputWithOutForm icon={FiSearch} />
          </header>
          <ScrollView>
            <CardListAppointment
              id="1A2VQ"
              restaurantName="Casa da Eshiha"
              date="01/07/2022"
            />
            <CardListAppointment
              id="1A2VQ"
              restaurantName="Casa da Eshiha"
              date="01/07/2022"
            />
            <CardListAppointment
              id="1A2VQ"
              restaurantName="Casa da Eshiha"
              date="01/07/2022"
            />
            <CardListAppointment
              id="1A2VQ"
              restaurantName="Casa da Eshiha"
              date="01/07/2022"
            />
          </ScrollView>
        </ListContainer>
      )}
      {showCompanys && (
        <ListContainer>
          <header>
            <h1>Pesquise aqui por sua companhia</h1>
            <InputWithOutForm icon={FiSearch} />
          </header>
          <ScrollView>
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
          </ScrollView>
        </ListContainer>
      )}
      <Footer />
    </Container>
  );
}
