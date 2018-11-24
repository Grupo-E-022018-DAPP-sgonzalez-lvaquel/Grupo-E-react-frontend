import IUser from 'src/model/IUser';
import { IUserAction } from '../actions/users';
import actionTypes from '../actionTypes';

export interface IUsersReducerState {
    currentUserId?: number;
    usersById: { [id: number]: IUser };
}

const initialState: IUsersReducerState = {
    usersById: {},
};

export default function (state = initialState, action: IUserAction): IUsersReducerState {
    switch(action.type){
        case actionTypes.users.SET_CURRENT_USER: return {
            ...state,
            currentUserId: action.user.id,
            usersById: {
                ...state.usersById,
                [action.user.id]: action.user,
            }
        };
        default: return state;
    }
}