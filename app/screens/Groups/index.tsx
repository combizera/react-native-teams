import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as S from './styles';
import { Header } from '@components/Header';
import { Highligth } from '@components/Highligth';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

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
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Que tal cadastrar a primeira turma?"
          />
        )}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </S.Container>
  );
}