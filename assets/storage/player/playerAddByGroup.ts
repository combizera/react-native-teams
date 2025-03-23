import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "../storageConfig";

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playerGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    /*
      Vai ficar salvo assim
      @ignite-teams:players-rocket: []
      @ignite-teams:players-artes-cenicas: []
      @ignite-teams:players-futeba: []
    */

    const storedPlayers = await playerGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time na plataforma');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

  } catch(error) {
    throw (error);
  }
}