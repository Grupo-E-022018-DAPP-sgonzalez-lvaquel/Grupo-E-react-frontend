import { IAuction } from 'src/model';
import { IAuctionsModificationAction } from '../actions/auctions';
import AuctionsActionTypes from '../actionTypes/auctions';


export interface IAuctionsReducerState {
  errors: string[],
  allIds: number[],
  byIds: { [id: number]: IAuction },
  recentIds: number[],
}

const initialState: IAuctionsReducerState = {
  allIds: [],
  byIds: {},
  errors: [],
  recentIds: [],
};

export default function (state = initialState, action: any): IAuctionsReducerState {
  switch (action.type) {
    case AuctionsActionTypes.ADD_AUCTIONS_ERROR: return {
      ...state,
      errors: [...state.errors, action.error]
    };
    case AuctionsActionTypes.ADD_AUCTIONS: return {
      ...state,
      allIds: mergeValues([...state.allIds, ...action.auctions.map(id)]),
      byIds: mergeByIds(state, action),
    };
    case AuctionsActionTypes.ADD_RECENT_AUCTIONS: return {
      ...state,
      byIds: mergeByIds(state, action),
      recentIds: mergeValues([...state.recentIds, ...action.auctions.map(id)])
    };
    default:
      return state;
  }
}

interface Identificable {
  id: any
}

function mergeByIds(state: IAuctionsReducerState, action: IAuctionsModificationAction) {
  return { ...state.byIds, ...action.auctions.reduce(byIds, {}) };
}

function mergeValues(values: any[]) {
  return Array.from(new Set(values));
}

function id(identificable: Identificable) {
  return identificable.id;
}

function byIds(dict: object, identificable: Identificable) {
  return {
    ...dict,
    [id(identificable)]: identificable,
  }
}
