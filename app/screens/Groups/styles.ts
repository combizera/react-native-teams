// @ts-ignore
import styled from "styled-components/native";

export const Container = styled.View
`
  background-color: ${({ theme }) => theme.COLORS.RED};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text
`
  font-size: 32px;
  font-weight: 700;
`;