import {
    PLAYER_CREATE,
    PLAYER_UPDATE,
    PLAYER_DESTROY,
  } from '../actions/player-actions.js';
  import uuidv1 from 'uuid/v1';
  
  const initialState = {
    players: [],
  }
  
  export default function playerReducer(state, action) {
    if (state === undefined) {
      return initialState;
    }
  
    let newState = {};
    let currentPlayers;
    let playerIndex;
  
    switch(action.type) {
      case PLAYER_CREATE:
        currentPlayers = state.players.slice();
        let newPlayer = Object.assign({}, {id: uuidv1(), isEditing: false}, action.value);
        currentPlayers.push(newPlayer);
        return Object.assign(newState, state, {players: currentPlayers});
      case PLAYER_UPDATE:
      currentPlayers = state.players.slice();
        let playerToUpdate = currentPlayers.find(player => {
          return player.id === action.values.id;
         });
        playerIndex = currentPlayers.indexOf(playerToUpdate);
        currentPlayers[playerIndex].isEditing = !currentPlayers[playerIndex].isEditing;
        if (action.values.name) {
          currentPlayers[playerIndex].name = action.values.name;
        }
        if (action.values.position) {
          currentPlayers[playerIndex].position = action.values.position;
        }
        return Object.assign(newState, state, {players: currentPlayers});
      case PLAYER_DESTROY:
        currentPlayers = state.players.slice();
        let playerToRemove = currentPlayers.find(player => {
          return player.id === action.id;
        });
        playerIndex = currentPlayers.indexOf(playerToRemove);
        currentPlayers.splice(playerIndex, 1);
        return Object.assign(newState, state, {players: currentPlayers});
    }
  }