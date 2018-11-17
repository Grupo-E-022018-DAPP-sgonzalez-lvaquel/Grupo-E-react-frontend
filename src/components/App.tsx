import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ISubastifyClient } from 'src/clients';
import Auth from 'src/clients/Auth';
import { setAuthService, setSubastifyClient } from 'src/store/actions';
import AuthCallback from './AuthCallback';
import ErrorsNotifier from './ErrorsNotifier';
import SubastifyNavBar from './SubastifyNavBar';
import SubastifyPageBody from './SubastifyPageBody';


interface IAppProps extends React.Props<any> {
    auth: Auth;
    subastifyClient: ISubastifyClient;
    setSubastifyClient: (client: ISubastifyClient) => void;
    setAuthService: (auth: Auth) => void;
}

class App extends React.Component<IAppProps> {

    public componentWillMount() {
        this.props.setAuthService(
            this.props.auth
        );

        this.props.setSubastifyClient(
            this.props.subastifyClient
        )
    }

    public render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="/auth" component={AuthCallback} />
                    <SubastifyNavBar />
                    <ErrorsNotifier />
                    <SubastifyPageBody />
                </React.Fragment>
            </Router>
        );
    }
}

export default connect(null, { setSubastifyClient, setAuthService })(App);
