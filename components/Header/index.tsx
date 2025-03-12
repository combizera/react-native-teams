import { Container, Logo } from './styles';
import logoImg from '@assets/images/logo.png';

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} alt="Logo - Rocketseat Logo" />
    </Container>
  );
}