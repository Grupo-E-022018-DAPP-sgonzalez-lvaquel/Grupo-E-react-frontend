import { ISubastifyClient } from 'src/clients/subastify';
import { IClientsAction } from '../actions/clients';
import actionTypes from '../actionTypes';

export interface IClientsReducerState {
    subastify?: ISubastifyClient
}

const initialState: IClientsReducerState = {
    subastify: undefined,
}

export default function (state = initialState, action: IClientsAction): IClientsReducerState {
    switch (action.type) {
        case actionTypes.clients.SET_SUBASTIFY: return {
            ...state,
            subastify: action.client,
        };
        default: return state;
    }
}
