import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, ContainerLogin } from './styles';

function LoginPage() {
  return (
    <Container>
      <Header />
      <img src="#" alt="" />
      <ContainerLogin>
        <img src="logo.svg" alt="" />
        <div className="Formlogin">
          <span>
            <img src="images/logo.svg" alt="" />
          </span>

          <Input title="Email" descriptionPlaceholder="Digite seu email" />

          <Input title="Senha" descriptionPlaceholder="Digite sua senha" />
          <p>Esqueci minha senha</p>
          <button type="button">LOGIN</button>
          <p>Não tem uma conta? Cadastre-se!!</p>
        </div>
      </ContainerLogin>
    </Container>
  );
}

export default LoginPage;
