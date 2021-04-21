import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, ContainerLogin } from './styles';

export default function LoginPage() {
  return (
    <Container>
      <Header />
      <ContainerLogin>
        <div className="Formlogin">
          <img src="images/logo.svg" alt="" />

          <header>
            <Input title="Email" descriptionPlaceholder="Digite seu email" />

            <Input title="Senha" descriptionPlaceholder="Digite sua senha" />
          </header>
          <main>
            <Link to="/">
              <p className="forgetPassaword">Esqueci minha senha</p>
            </Link>

            <button type="button">LOGIN</button>
          </main>

          <footer>
            <Link to="/register">
              <p>Não tem uma conta? Cadastre-se!!</p>
            </Link>
          </footer>
        </div>
      </ContainerLogin>
    </Container>
  );
}
