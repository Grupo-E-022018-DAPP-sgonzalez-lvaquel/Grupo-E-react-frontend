import Axios from 'axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ISubastifyClient, SubastifyClient } from 'src/clients';
import { setSubastifyClient } from 'src/store/actions/clients';
import ErrorsNotifier from './ErrorsNotifier';
import SubastifyNavBar from './SubastifyNavBar';
import SubastifyPageBody from './SubastifyPageBody';


interface IAppProps extends React.Props<any> {
    setSubastifyClient: (client: ISubastifyClient) => void;
}

class App extends React.Component<IAppProps> {

    public componentWillMount() {
        this.props.setSubastifyClient(
            new SubastifyClient(Axios.create({ baseURL: 'http://localhost:3001' }))
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
