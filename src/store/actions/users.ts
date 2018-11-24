import { Action } from 'redux';

import { ISubastifyClient } from 'src/clients';
import IUser from 'src/model/IUser';
import actionTypes from '../actionTypes';
import { IStore } from '../reducers/rootReducer';
import { getSubastifyClient } from '../selectors';


export interface IUserAction extends Action {
    user: IUser;
}

export function setCurrentUser(user: IUser): IUserAction {
    return {
        type: actionTypes.users.SET_CURRENT_USER,
        user,
    }
}

export function fetchUserByKid(kid: string) {
    return (dispatch: any, getState: () => IStore) => {
        const subastify = getSubastifyClient(getState()) as ISubastifyClient;
        subastify.getUserByKid(kid).then(user => {
            dispatch(
                setCurrentUser(user)
            )
        })
    }
}