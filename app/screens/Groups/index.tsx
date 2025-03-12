import * as S from './styles';
import { Header } from '@components/Header';
import { Highligth } from '@components/Highligth';

export default function Groups() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highligth
        title="Turmas"
        subtitle='Jogue com a sua turma'
      />
    </S.Container>
  );
}

