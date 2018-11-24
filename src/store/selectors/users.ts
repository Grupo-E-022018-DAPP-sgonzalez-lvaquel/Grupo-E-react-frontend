import { IStore } from '../reducers/rootReducer';
import { IUsersReducerState } from '../reducers/users';


function getUserState({ users }: IStore): IUsersReducerState {
    return users
}

export function getCurrentUserId(state: IStore): number | undefined {
    return getUserState(state).currentUserId
}

export function isAuthenticated(state: IStore): boolean {
    return !!getCurrentUserId(state);
}