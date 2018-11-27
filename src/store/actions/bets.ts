import { Action } from 'redux';
import { IBet } from 'src/model';

export type IBetAction = IBetErrorsAction | IBetModificationAction

export interface IBetErrorsAction extends Action {
    error: string
}

export interface IBetModificationAction extends Action {
    bets: IBet[],
}
