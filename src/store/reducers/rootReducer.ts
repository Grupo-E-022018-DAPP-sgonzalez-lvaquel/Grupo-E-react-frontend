import { combineReducers } from 'redux';
import auctions, { IAuctionsReducerState } from './auctions';
import clients, { IClientsReducerState } from './clients';

export interface IStore {
    auctions: IAuctionsReducerState,
    clients: IClientsReducerState,
}

export default combineReducers({ 
    auctions, 
    clients, 
});
