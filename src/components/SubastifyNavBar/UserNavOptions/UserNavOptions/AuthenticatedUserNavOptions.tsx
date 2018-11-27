import * as React from 'react';
import { Translate } from 'react-localize-redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Auth from 'src/clients/Auth';
import LanguageSelect from 'src/components/common/LanguageSelect';
import { IStore } from 'src/store/reducers/rootReducer';
import { getAuthService } from 'src/store/selectors';


interface IAuthenticatedUserNavOptionsProps extends React.Props<any> {
    auth: Auth;
}

function AuthenticatedUserNavOptions({ auth }: IAuthenticatedUserNavOptionsProps) {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/auctions/new" exact={true}>
                    <Translate id="nav.user.publish" />
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/me" exact={true}>
                    <Translate id="nav.user.profile" />
                    <i className="fas fa-user-circle" />
                </NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={auth.logout} href='/'>
                    <Translate id="nav.user.logout" />
                </a>
            </li>
            <li className="nav-item">
                <LanguageSelect />
            </li>
        </ul>);
}

function mapStateToProps(state: IStore) {
    return {
        auth: getAuthService(state),
    }
}

export default connect(mapStateToProps)(AuthenticatedUserNavOptions);
