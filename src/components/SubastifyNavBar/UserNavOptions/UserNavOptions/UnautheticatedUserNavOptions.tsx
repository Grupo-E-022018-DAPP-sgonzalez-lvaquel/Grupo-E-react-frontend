import * as React from 'react';
import { connect } from 'react-redux';

import Auth from 'src/clients/Auth';
import { IStore } from 'src/store/reducers/rootReducer';
import { getAuthService } from 'src/store/selectors';


interface IUnautheticatedUserNavOptionsProps extends React.Props<any> {
    auth: Auth;
}

function UnautheticatedUserNavOptions({ auth }: IUnautheticatedUserNavOptionsProps) {
    return (
        <ul className="navbar-nav mr-auto float-right">
            <li className="nav-item">
                <a className="nav-link" onClick={auth.login} href='#'>
                    Log In
                </a>
            </li>
        </ul>
    );
}

function mapStateToProps(state: IStore) {
    return {
        auth: getAuthService(state),
    }
}

export default connect(mapStateToProps)(UnautheticatedUserNavOptions);
