import { Action } from "redux";
import { ISubastifyClient } from 'src/clients/subastify';
import actionTypes from '../actionTypes';

export interface IClientsAction extends Action {
    client: ISubastifyClient
}

function clientAction(type: string, client: ISubastifyClient) {
    return {
        client,
        type,
    }
}

export const setSubastifyClient = clientAction.bind(undefined, actionTypes.clients.SET_SUBASTIFY);