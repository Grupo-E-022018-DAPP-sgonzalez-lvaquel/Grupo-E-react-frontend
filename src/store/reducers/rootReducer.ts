import { combineReducers } from 'redux';
import auctions, { IAuctionsReducerState } from './auctions';

export interface IStore {
    auctions: IAuctionsReducerState,
}

export default combineReducers({ auctions });
