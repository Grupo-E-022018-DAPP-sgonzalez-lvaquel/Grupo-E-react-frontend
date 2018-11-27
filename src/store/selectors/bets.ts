import { IStore } from '../reducers/rootReducer';

export function getBetsByIds(state: IStore, ids: [number]) {
  return ids.map(id => getBetById(state, id))
}

export function getBetById(state: IStore, id: number) {
    return state.bets.byIds[id]
}
