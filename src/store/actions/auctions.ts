import { Action } from 'redux';
import { ISubastifyClient } from 'src/clients/subastify';
import { IAuction, IBet } from 'src/model';
import IAuctionOptions from 'src/model/IAuctionOptions';
import actionTypes from '../actionTypes';
import { IStore } from '../reducers/rootReducer';
import { getCurrentUserId, getSubastifyClient } from '../selectors';

import { addBets, addBetsError } from '../actions/bets'


export type IAuctionsAction = IAuctionsErrorsAction | IAuctionsModificationAction

export interface IAuctionsErrorsAction extends Action {
    error: string
}

export interface IAuctionsModificationAction extends Action {
    auctions: IAuction[],
}

export function createAuction({description, dueDate, imageUrl, initialPrice, title}: IAuctionOptions) {
    return (dispatch: any, getState: () => IStore) => {
        const state = getState();
        const ownerId = getCurrentUserId(state)

        if(!ownerId){
            throw new Error('can not create auctions: Not logged in')
        }

        const newAuction: any = {
            description,
            endDate: dueDate.toISOString(),
            imageUrl,
            initialPrice,
            owner: {id: ownerId},
            title,
        };

        return (getSubastifyClient(state) as ISubastifyClient)
        .createAuction(newAuction)
        .then((auction: IAuction) => {
            dispatch(
                addAuctions([auction])
            );
            return auction;
        })

    }
}

export function auctionAction(type: string, auctions: IAuction[]): IAuctionsAction {
    return {
        auctions,
        type
    }
}

export const addAuctions = auctionAction.bind(undefined, actionTypes.auctions.ADD_AUCTIONS)

export const addRecentAuctions = auctionAction.bind(undefined, actionTypes.auctions.ADD_RECENT_AUCTIONS)

export function addAuctionsError(error: string) {
    return {
        error,
        type: actionTypes.auctions.ADD_AUCTIONS_ERROR,
    }
}

export function fetchAuctions() {
    return (dispatch: any, getState: () => IStore) => {
        (getSubastifyClient(getState()) as ISubastifyClient)
            .getAuctions()
            .then((auctions: IAuction[]) => {
                dispatch(
                    addAuctions(auctions)
                )
            })
            .catch((err: any) => {
                dispatch(
                    addAuctionsError(`Could not fetch auctions: ${err.message}`)
                );
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
            })
            .catch((err: any) => {
                dispatch(
                    addAuctionsError(`Could not fetch recent auctions: ${err.message}`)
                );
            });
    }
}

export function fetchAuction(id: number) {
  return (dispatch: any, getState: () => IStore) => {
    (getSubastifyClient(getState()) as ISubastifyClient)
      .getAuction(id).then((auction: IAuction) => {
        dispatch(addAuctions([auction]))
      }).catch((err: any) => {
          dispatch(
              addAuctionsError(`Could not fetch auction: ${err.message}`)
          );
      });
  }
}

export function fetchAuctionBets(id: number) {
  return (dispatch: any, getState: () => IStore) => {
    (getSubastifyClient(getState()) as ISubastifyClient)
      .getAuctionBets(id).then((bets: [IBet]) => {
        dispatch(addBets(bets))
      }).catch((err: any) => {
        dispatch(
          addBetsError(`Could not fetch bets: ${err.message}`)
        )
      })
  }
}
