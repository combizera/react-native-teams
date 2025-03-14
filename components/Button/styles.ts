import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStylePropos = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStylePropos;
}

export const Container = styled(TouchableOpacity) <Props>
`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
    
  min-height: 56px;
  max-height: 56px;
    
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
`

export const Title = styled.Text
`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`