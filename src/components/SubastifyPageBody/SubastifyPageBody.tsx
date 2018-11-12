import * as React from 'react';
import { Route } from 'react-router';
import HomePage from './HomePage';


function SubastifyPageBody(props: React.Props<any>) {
    return (
        <Route path="/" exact={true} component={HomePage} />
    );
}

export default SubastifyPageBody;
