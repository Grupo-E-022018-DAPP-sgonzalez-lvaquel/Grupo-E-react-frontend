import * as React from 'react';
import { Translate } from 'react-localize-redux';
import { connect } from 'react-redux';

import Auth from 'src/clients/Auth';
import LanguageSelect from 'src/components/common/LanguageSelect';
import { IStore } from 'src/store/reducers/rootReducer';
import { getAuthService } from 'src/store/selectors';


interface IUnautheticatedUserNavOptionsProps extends React.Props<any> {
    auth: Auth;
}

function UnautheticatedUserNavOptions({ auth }: IUnautheticatedUserNavOptionsProps) {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" onClick={auth.login} href='#'>
                    <Translate id="nav.user.login" />
                </a>
            </li>
            <li className="nav-item">
                <LanguageSelect />
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
