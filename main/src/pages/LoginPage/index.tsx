import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container, ContainerLogin } from './styles';


function LoginPage() {
  return (
    <Container>
      <Header />


      <ContainerLogin>
        <img src="logo.svg" alt="" />
        <div className="Formlogin">
          <h1>login</h1>
          <span><img src="images/logo.svg" alt="" /></span>

          <p>Seja Bem Vindo </p>
          <Input />
          <Input />
          <button>LOGIN</button>
        </div>
      </ContainerLogin>

    </Container>
  );
};

export default LoginPage;
