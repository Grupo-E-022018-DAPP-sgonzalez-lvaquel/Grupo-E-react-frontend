import { IAuction } from 'src/model';
import { IAuctionsAction } from '../actions/auctions';
import AuctionsActionTypes from '../actionTypes/auctions';


export interface IAuctionsReducerState {
  allIds: number[],
  byIds: { [id: number]: IAuction },
  recentIds: number[],
}

const initialState: IAuctionsReducerState = {
  allIds: [],
  byIds: {},
  recentIds: [],
};

export default function (state = initialState, action: IAuctionsAction): IAuctionsReducerState {
  switch (action.type) {
    case AuctionsActionTypes.ADD_AUCTIONS: return {
      allIds: mergeValues(state.allIds, action.auctions.map(id)),
      byIds: mergeByIds(state, action),
      recentIds: state.recentIds,
    };
    case AuctionsActionTypes.ADD_RECENT_AUCTIONS: return {
      allIds: state.allIds,
      byIds: mergeByIds(state, action),
      recentIds: mergeValues(state.recentIds, action.auctions.map(id))
    };
    default:
      return state;
  }
}

interface Identificable {
  id: any
}

function mergeByIds(state: IAuctionsReducerState, action: IAuctionsAction) {
  return { ...state.byIds, ...action.auctions.reduce(byIds, {}) };
}

function mergeValues(...values: any[]) {
  return Array.from(new Set(...values));
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
