import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Highligth } from '@components/Highligth';
import { Button } from '@components/Button';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highligth
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Button
          title="Criar"
        />

      </Content>
    </Container>
  );
}