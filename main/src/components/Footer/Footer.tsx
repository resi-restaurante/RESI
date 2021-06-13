import { Container, Description } from './styles';

interface ContainerProps {
  positionType: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
}

export const Footer = ({ positionType }: ContainerProps) => {
  return (
    <Container style={{ position: positionType }}>
      <Description>Todos os direitos reservados | Resi</Description>
    </Container>
  );
};
