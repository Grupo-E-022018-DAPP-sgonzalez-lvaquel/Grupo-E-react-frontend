import * as React from 'react';
import { connect } from 'react-redux';

import LanguageSelect from 'src/components/common/LanguageSelect';
import { IStore } from 'src/store/reducers/rootReducer';
import { isAuthenticated } from 'src/store/selectors';
import AuthenticatedUserNavOptions from './AuthenticatedUserNavOptions';
import UnautheticatedUserNavOptions from './UnautheticatedUserNavOptions';


interface IUserNavOptionsProps {
    isAuthenticated: boolean;
}

function UserNavOptions(props: IUserNavOptionsProps) {
    return (
        <React.Fragment>
            {props.isAuthenticated ? <AuthenticatedUserNavOptions /> : <UnautheticatedUserNavOptions />}
            <LanguageSelect />
        </React.Fragment>
    );
}

function mapStateToProps(state: IStore) {
    return {
        isAuthenticated: isAuthenticated(state),
    }
}

export default connect(mapStateToProps)(UserNavOptions);
