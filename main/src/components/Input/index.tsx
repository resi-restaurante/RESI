import { Container } from './styles';

interface InputProps {
  title: string;
  descriptionPlaceholder: string;
}
function Input({ title, descriptionPlaceholder }: InputProps) {
  return (
    <Container>

      <form>
        <label htmlFor="">{title}</label>
        <input type="text" placeholder={descriptionPlaceholder} />
      </form>
    </Container>
  );
};

export default Input;