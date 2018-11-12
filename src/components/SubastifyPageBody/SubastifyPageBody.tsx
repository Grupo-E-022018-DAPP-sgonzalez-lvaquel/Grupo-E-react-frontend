import * as React from 'react';
import { Route } from 'react-router';

import AuctionDetailsPage from './AuctionDetailsPage';
import HomePage from './HomePage';


function SubastifyPageBody(props: React.Props<any>) {
    return (
        <React.Fragment>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/auction/:id" exact={true} component={AuctionDetailsPage} />
        </React.Fragment>
    );
}

export default SubastifyPageBody;
