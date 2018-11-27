import * as React from 'react';
import { connect } from 'react-redux';

import { IStore } from 'src/store/reducers/rootReducer';
import { isAuthenticated } from 'src/store/selectors';
import AuthenticatedUserNavOptions from './AuthenticatedUserNavOptions';
import UnautheticatedUserNavOptions from './UnautheticatedUserNavOptions';


interface IUserNavOptionsProps {
    isAuthenticated: boolean;
}

function UserNavOptions(props: IUserNavOptionsProps) {
    if(props.isAuthenticated){
        return <AuthenticatedUserNavOptions />;
    } else {
        return <UnautheticatedUserNavOptions />;
    }
}

function mapStateToProps(state: IStore) {
    return {
        isAuthenticated: isAuthenticated(state),
    }
}

export default connect(mapStateToProps)(UserNavOptions);
