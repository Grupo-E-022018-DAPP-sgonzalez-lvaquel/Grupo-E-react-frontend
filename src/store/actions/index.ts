import { Action } from 'redux';
import IAuctionsAction from './IAuctionsAction';

type IAction = Action | IAuctionsAction

export default IAction;