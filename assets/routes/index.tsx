import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { AppRoutes } from './app.routes';

export function Routes() {
  const { COLORS } = useTheme();
  return (
    // Fazer isso pra evitar um 'glitch' que o app tem ao mudar de tela, e fica com um bg branco
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <AppRoutes />
    </View>
  );
}