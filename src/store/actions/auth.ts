import { Action } from 'redux';

import Auth from 'src/clients/Auth';
import actionTypes from '../actionTypes';


export interface IAuthAction extends Action {
    auth: Auth;
}

export function setAuthService(auth: Auth): IAuthAction {
    return {
        auth,
        type: actionTypes.auth.SET_AUTH_SERVICE,
    }
}