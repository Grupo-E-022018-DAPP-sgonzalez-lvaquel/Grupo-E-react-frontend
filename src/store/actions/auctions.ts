import { Action } from 'redux';
import { ISubastifyClient } from 'src/clients/subastify';
import { IAuction } from 'src/model';
import actionTypes from '../actionTypes';
import { IStore } from '../reducers/rootReducer';
import { getSubastifyClient } from '../selectors/clients';


export interface IAuctionsAction extends Action {
    auctions: IAuction[],
}

export function auctionAction(type: string, auctions: IAuction[]): IAuctionsAction {
    return {
        auctions,
        type
    }
}

export const addAuctions = auctionAction.bind(undefined, actionTypes.auctions.ADD_AUCTIONS)

export const addRecentAuctions = auctionAction.bind(undefined, actionTypes.auctions.ADD_RECENT_AUCTIONS)

export function fetchAuctions() {
    return (dispatch: any, getState: () => IStore) => {
        (getSubastifyClient(getState()) as ISubastifyClient)
            .getAuctions()
            .then((auctions: IAuction[]) => {
                dispatch(
                    addAuctions(auctions)
                )
            });
    }
}

export function fetchRecentAuctions() {
    return (dispatch: any, getState: () => IStore) => {
        (getSubastifyClient(getState()) as ISubastifyClient)
            .getRecentAuctions()
            .then((auctions: IAuction[]) => {
                dispatch(
                    addRecentAuctions(auctions)
                )
            });
    }
}