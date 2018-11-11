import { Action } from 'redux';
import { IAuctionsAction } from './auctions';

type IAction = Action | IAuctionsAction;

export default IAction;