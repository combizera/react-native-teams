import { useState } from "react";
import { FlatList } from "react-native";

import * as S from './styles';
import { Header } from '@components/Header';
import { Highligth } from '@components/Highligth';
import { GroupCard } from '@components/GroupCard';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Artes Cênicas', 'Turma da PUC']);

  return (
    <S.Container>
      <Header showBackButton />

      <Highligth
        title="Turmas"
        subtitle='Jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
      />
    </S.Container>
  );
}