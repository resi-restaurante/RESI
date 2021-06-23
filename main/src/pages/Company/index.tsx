import { FiCalendar, FiSearch } from 'react-icons/fi';
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
  CardListCompanys,
  InputWithOutForm,
  Footer,
} from '../../components';
import profileAvatar from '../../assets/images/profile.jpg';

export default function CompanyPage({ id, restaurantName }: any) {
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
              {restaurantName}#{id}
            </h3>
            {/* <h3 id="user-email">{user.email}</h3> */}
          </div>
        </CardUserInformationContainer>
        <SelectionMenu>
          <ContentContainer>
            <FiCalendar size={20} />
            <h3>Agendamentos</h3>
          </ContentContainer>
        </SelectionMenu>
      </RedContainer>

      <ListContainer>
        <header>
          <h1>Veja os agendamentos solicitados</h1>
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

      <Footer />
    </Container>
  );
}
