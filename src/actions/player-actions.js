export const PLAYER_CREATE = 'PLAYER_CREATE';
export const PLAYER_UPDATE = 'PLAYER_UPDATE';
export const PLAYER_DESTROY = 'PLAYER_DESTROY';

export function playerCreate(value) {
  return {type: PLAYER_CREATE, value};
}

export function playerUpdate(values) {
  return {type: PLAYER_UPDATE, values};
}

export function playerDestroy(id) {
  return {type: PLAYER_DESTROY, id};
}