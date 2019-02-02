import { IBet } from 'src/model';
import { IStore } from '../reducers/rootReducer';

import { getBetsByIds } from './bets';

export function getAuctionsErrors(state: IStore) {
    return state.auctions.errors;
}

export function getAuctions(state: IStore) {
    return state.auctions.allIds.map(id => auctionsById(state)[id])
}

export function getRecentAuctions(state: IStore) {
    return state.auctions.recentIds.map(id => auctionsById(state)[id])
}

export function auctionsById({auctions: {byIds}}: IStore) {
    return byIds;
}

export function getAuction(state: IStore, id: number) {
  return auctionsById(state)[id]
}

export function getAuctionBettorsAmount(state: IStore, id: number) {
  return auctionBettorsIds(state, id).length;
}

export function auctionBettorsIds(state: IStore, id: number) {
  return getAuctionBets(state, id).map((bet: IBet) => bet.bettorId)
}

export function getAuctionBets(state: IStore, id: number) {
    return getBetsByIds(state, getAuctionBetsIds(state, id))
}

export function getAuctionBetsIds(state: IStore, id: number) {
    return getAuction(state, id).bets
}
