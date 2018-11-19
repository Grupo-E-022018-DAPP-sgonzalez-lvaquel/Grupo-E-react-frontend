import { IStore } from '../reducers/rootReducer';

export function getAuthService(state: IStore) {
    return state.auth;
}
