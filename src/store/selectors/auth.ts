import { IStore } from '../reducers/rootReducer';

export function getAuthService(state: IStore) {
    return state.auth;
}

export function getAccessToken(state: IStore): string | undefined {
    const auth = getAuthService(state);
    if(!auth) {
        return undefined;
    }
    return auth.accessToken;
}

export function getKid(state: IStore): string | undefined {
    const auth = getAuthService(state);
    if(!auth) {
        return undefined;
    }
    return auth.kid;
}