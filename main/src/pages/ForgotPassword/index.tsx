import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, ContainerCard } from './styles';

export default function ForgotPassword() {
  return (
    <Container>
      <Header />
      <ContainerCard>
        <div className="formCard">
          <h2>Recuperar senha</h2>
          <Input title="Email" descriptionPlaceholder="Digite seu email" />
          <footer>
            <Link to="/login">
              <p>Voltar</p>
            </Link>
            <button type="button">Enviar</button>
          </footer>
        </div>
      </ContainerCard>
    </Container>
  );
}
