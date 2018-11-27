import { Action } from 'redux';
import { IBet } from 'src/model';
import actionTypes from '../actionTypes';

export type IBetAction = IBetErrorsAction | IBetModificationAction

export interface IBetErrorsAction extends Action {
    error: string
}

export interface IBetModificationAction extends Action {
    bets: IBet[],
}

export function addBets(bets: [IBet]) {
  return {
      bets,
      type: actionTypes.bets.ADD_BETS,
  }
}

export function addBetsError(error: string) {
  return {
      error,
      type: actionTypes.bets.ADD_BETS_ERROR,
  }
}
