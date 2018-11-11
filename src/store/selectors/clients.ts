import { IStore } from '../reducers/rootReducer';

export function getSubastifyClient({clients}: IStore) {
    return clients.subastify;
}