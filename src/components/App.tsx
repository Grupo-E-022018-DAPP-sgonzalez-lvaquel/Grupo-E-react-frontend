import 'node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';

import SubastifyNavBar from './SubastifyNavBar';
import SubastifyPageBody from './SubastifyPageBody';


export default function App(props: any) {
    return (
        <React.Fragment>
            <SubastifyNavBar />
            <SubastifyPageBody />
        </React.Fragment>
    );
}
