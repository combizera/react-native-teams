import { useNavigation } from '@react-navigation/native';

import { Container, Logo, BackButton, BackIcon } from './styles';
import logoImg from '@assets/images/logo.png';
import { TelegramLogo } from 'phosphor-react-native';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    // Isso é usado quando queremos voltar só uma tela, um item na stack
    // navigation.goBack();
    navigation.navigate('groups');
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton
          onPress={handleGoBack}
        >
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImg} alt="Logo - Rocketseat Logo" />
    </Container>
  );
}