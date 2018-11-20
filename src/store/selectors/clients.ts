import { IStore } from '../reducers/rootReducer';
import { getAccessToken } from './auth';


export function getSubastifyClient(state: IStore) {
    const subastifyClient = state.clients.subastify;

    // tslint:disable-next-line:no-unused-expression
    subastifyClient && subastifyClient.setAccessToken(getAccessToken(state));

    return subastifyClient;
}