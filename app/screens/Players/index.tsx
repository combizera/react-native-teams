import { Container, Form } from './styles';

import { Header } from "@components/Header";
import { Highligth } from "@components/Highligth";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highligth
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder='Nome da turma'
          autoCorrect={false}
        />

        <ButtonIcon
          icon="add"
        />
      </Form>

      <Filter
        title="Time A"
      />
    </Container>
  );
}