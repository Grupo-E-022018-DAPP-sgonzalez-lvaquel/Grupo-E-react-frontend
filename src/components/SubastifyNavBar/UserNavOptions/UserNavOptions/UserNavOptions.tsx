import * as React from 'react';
import { connect } from 'react-redux';

import Auth from 'src/clients/Auth';
import LanguageSelect from 'src/components/common/LanguageSelect';
import { IStore } from 'src/store/reducers/rootReducer';
import { getAuthService } from 'src/store/selectors';
import AuthenticatedUserNavOptions from './AuthenticatedUserNavOptions';
import UnautheticatedUserNavOptions from './UnautheticatedUserNavOptions';


interface IUserNavOptionsProps {
    auth: Auth;
}

function UserNavOptions({ auth }: IUserNavOptionsProps) {
    return (
        <React.Fragment>
            {auth.isAuthenticated() ? <AuthenticatedUserNavOptions /> : <UnautheticatedUserNavOptions />}
            <LanguageSelect />
        </React.Fragment>
    );
}

function mapStateToProps(state: IStore) {
    return {
        auth: getAuthService(state),
    }
}

export default connect(mapStateToProps)(UserNavOptions);
