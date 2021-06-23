import { Container, CardUserInformationContainer } from './styles';
import profileAvatar from '../../assets/images/profile.jpg';

export default function ProfilePage() {
  return (
    <Container>
      <CardUserInformationContainer>
        <div>
          <img src={profileAvatar} alt="Foto do usuário" />
        </div>
        <h3>Yan Kaique Costa Marinho</h3>
      </CardUserInformationContainer>
    </Container>
  );
}
