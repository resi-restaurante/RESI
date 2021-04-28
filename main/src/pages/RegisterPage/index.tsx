import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container } from './styles';

export default function RegisterPage() {
  return (
    <Container>
      <Header />
      <main>
        <div className="modalRegister">
          <div className="containerLogo">
            <img src="images/logo.svg" alt="Resi" />
          </div>
          <div className="inputsContainer">
            <Input title="Nome" descriptionPlaceholder="Digite seu nome" />
            <Input title="Email" descriptionPlaceholder="Digite seu email" />
            <Input title="Data" descriptionPlaceholder="dd/mm/aa" />
            <Input title="Cidade" descriptionPlaceholder="Digite sua cidade" />
            <Input title="Senha" descriptionPlaceholder="Digite sua senha" />
            <Input
              title="Confirme sua senha"
              descriptionPlaceholder="Confirme sua senha"
            />
          </div>
          <footer>
            <Link to="/login">
              <p>Voltar</p>
            </Link>
            <button type="button">Registrar</button>
          </footer>
        </div>
      </main>
    </Container>
  );
}
