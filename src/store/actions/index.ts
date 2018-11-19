import { Action } from 'redux';
import { IAuctionsAction } from './auctions';

type IAction = Action | IAuctionsAction;

export * from './clients';
export * from './auctions';
export * from './auth';

export default IAction;
