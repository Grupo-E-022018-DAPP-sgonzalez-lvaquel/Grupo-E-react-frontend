import Auth from 'src/clients/Auth';
import { IAuthAction } from '../actions';
import actionTypes from '../actionTypes';

export type IAuthReducerState = Auth | null;

const initialState: IAuthReducerState = null

export default function (state: IAuthReducerState = initialState, action: IAuthAction) {

    switch (action.type) {
        case actionTypes.auth.SET_AUTH_SERVICE: return action.auth;
        default: return state;
    }
}
