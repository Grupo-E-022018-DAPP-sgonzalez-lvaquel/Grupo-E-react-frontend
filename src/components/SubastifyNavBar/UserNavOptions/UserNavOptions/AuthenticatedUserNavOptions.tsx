import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Auth from 'src/clients/Auth';
import { IStore } from 'src/store/reducers/rootReducer';
import { getAuthService } from 'src/store/selectors';


interface IAuthenticatedUserNavOptionsProps extends React.Props<any> {
    auth: Auth;
}

function AuthenticatedUserNavOptions({ auth }: IAuthenticatedUserNavOptionsProps) {
    return (
        <ul className="navbar-nav mr-auto float-right">
            <li className="nav-item">
                <NavLink className="nav-link" to="/auctions/new" exact={true}>
                    Publish
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/me" exact={true}>
                    Me
                    <i className="fas fa-user-circle" />
                </NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={auth.logout} href='/'>
                    Log Out
                </a>
            </li>
        </ul>);
}

function mapStateToProps(state: IStore) {
    return {
        auth: getAuthService(state),
    }
}

export default connect(mapStateToProps)(AuthenticatedUserNavOptions);
