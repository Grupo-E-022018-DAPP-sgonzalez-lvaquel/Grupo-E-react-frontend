import { Location } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import Auth from 'src/clients/Auth';
import { IStore } from 'src/store/reducers/rootReducer';
import { getAuthService } from 'src/store/selectors';


interface IAuthCallbackProps extends React.Props<any> {
    auth: Auth;
    location: Location;
}

function AuthCallback(props: IAuthCallbackProps) {
    handleAuthentication(props);
    return <Redirect to='/' />;
}

const handleAuthentication = ({ location, auth }: IAuthCallbackProps) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

function mapStateToProps(state: IStore) {
    return {
        auth: getAuthService(state),
    }
}

export default connect(mapStateToProps)(AuthCallback);
