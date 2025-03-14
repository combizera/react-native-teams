import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Highligth } from '@components/Highligth';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

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

        <Input
          placeholder="Nome da turma"
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
        />

      </Content>
    </Container>
  );
}