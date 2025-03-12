import * as S from './styles';
import { Header } from '@components/Header';
import { Highligth } from '@components/Highligth';
import { GroupCard } from '@components/GroupCard';

export default function Groups() {
  return (
    <S.Container>
      <Header showBackButton />

      <Highligth
        title="Turmas"
        subtitle='Jogue com a sua turma'
      />

      <GroupCard
        title="Artes Cênicas"
      />
    </S.Container>
  );
}

