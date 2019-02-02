import { IBet } from 'src/model';
import actionTypes from '../actionTypes';


export interface IBetsReducerState {
  errors: string[],
  byIds: { [id: number]: IBet },
}

const initialState: IBetsReducerState = {
  byIds: {},
  errors: [],
};

export default function (state = initialState, action: any): IBetsReducerState {
  switch (action.type) {
    case actionTypes.bets.ADD_BETS:
      return {...state, byIds: {...state.byIds, ...betsByIds(action.bets)}}
    default:
      return state;
  }
}

function betsByIds(bets: [IBet]) {
  const returnValue = {}
  bets.forEach(bet => returnValue[bet.id] = bet)
  return returnValue
}
