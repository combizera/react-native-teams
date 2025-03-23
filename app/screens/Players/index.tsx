import { useState, useEffect, useRef } from 'react';
import { Alert, FlatList, TextInput, Keyboard } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { AppError } from '@utils/AppError';

import { playerAddByGroup } from '@assets/storage/player/playerAddByGroup';
import { playerGetByGroup } from '@assets/storage/player/playersGetByGroup';
import { PlayerStorageDTO } from '@assets/storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@assets/storage/player/playerRemoveByGroup';
import { playersGetByGroupAndTeam } from '@assets/storage/player/playersGetByGroupAndTeam';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Header } from "@components/Header";
import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';
import { Highligth } from "@components/Highligth";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from '@components/PlayerCard';

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Digite o nome da pessoa que deseja adicionar');
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group);

      Keyboard.dismiss();

      setNewPlayerName('');
      fetchPlayersByTeam();

      const players = await playerGetByGroup(group);
      console.log(players);

    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.');
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);

    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregas as pessoas do time selecionado.')
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();

    } catch (error) {
      console.log(error);
      Alert.alert('Remover pessoa', 'Não foi possível remover a pessoa.');
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <Highligth
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          onChangeText={setNewPlayerName}
          placeholder='Nome da turma'
          value={newPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C', 'Time D']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Não há pessoas nesse time."
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 20 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
      />

    </Container >
  );
}