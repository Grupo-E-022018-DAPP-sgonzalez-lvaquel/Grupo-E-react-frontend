import * as React from 'react';
import { connect } from 'react-redux';

import { fetchUserByKid } from 'src/store/actions/users';
import { IStore } from 'src/store/reducers/rootReducer';
import { getCurrentUserId, getKid } from 'src/store/selectors';

interface IUserManagerProps extends React.Props<any> {
    currentUserId?: number;
    kid?: string
    fetchUser: (kid: string) => void;
}

function UserManager({ kid, currentUserId, fetchUser }: IUserManagerProps) {
    if (kid && !currentUserId) {
        fetchUser(kid)
    }
    return (<React.Fragment/>);
}

const mapStateToProps = (state: IStore) => ({
    currentUserId: getCurrentUserId(state),
    kid: getKid(state),
});

export default connect(mapStateToProps, { fetchUser: fetchUserByKid })(UserManager);