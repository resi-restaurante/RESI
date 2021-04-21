import { Container } from './styles';

interface InputProps {
  title: string;
  descriptionPlaceholder: string;
}

export function Input({ title, descriptionPlaceholder }: InputProps) {
  return (
    <Container>
      <p>{title}</p>
      <input type="text" placeholder={descriptionPlaceholder} />
    </Container>
  );
}
