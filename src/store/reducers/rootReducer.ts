import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';

import auctions, { IAuctionsReducerState } from './auctions';
import auth, { IAuthReducerState } from './auth';
import clients, { IClientsReducerState } from './clients';
import users, { IUsersReducerState } from './users';

export interface IStore {
    auctions: IAuctionsReducerState,
    auth: IAuthReducerState,
    clients: IClientsReducerState,
    users: IUsersReducerState,
}

export default combineReducers({
    auctions,
    auth,
    clients,
    localize: localizeReducer,
    users,
});
