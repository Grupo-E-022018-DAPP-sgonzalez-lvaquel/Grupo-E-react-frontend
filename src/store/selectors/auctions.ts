import { IStore } from '../reducers/rootReducer';

export function getAuctions(state: IStore) {
    return state.auctions.allIds.map(id => auctionsById(state)[id])
}

export function getRecentAuctions(state: IStore) {
    return state.auctions.recentIds.map(id => auctionsById(state)[id])
}

export function auctionsById({auctions: {byIds}}: IStore) {
    return byIds;
}