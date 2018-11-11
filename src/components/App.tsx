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
