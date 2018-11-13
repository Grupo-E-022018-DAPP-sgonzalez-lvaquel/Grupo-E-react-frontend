import Axios from 'axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ISubastifyClient } from 'src/clients';
import { setSubastifyClient } from 'src/store/actions/clients';
import ErrorsNotifier from './ErrorsNotifier';
import SubastifyNavBar from './SubastifyNavBar';
import SubastifyPageBody from './SubastifyPageBody';


interface IAppProps extends React.Props<any> {
    subastifyClient: ISubastifyClient;
    setSubastifyClient: (client: ISubastifyClient) => void;
}

class App extends React.Component<IAppProps> {

    public componentWillMount() {
        this.props.setSubastifyClient(
            this.props.subastifyClient
        )
    }

    public render() {
        return (
            <Router>
                <React.Fragment>
                    <SubastifyNavBar />
                    <ErrorsNotifier />
                    <SubastifyPageBody />
                </React.Fragment>
            </Router>
        );
    }
}

export default connect(null, { setSubastifyClient })(App);
