import * as React from 'react';
import { Route } from 'react-router';

import AuctionDetailsPage from './AuctionDetailsPage';
import HomePage from './HomePage';
import NewAuctionPage from './NewAuctionPage';


function SubastifyPageBody(props: React.Props<any>) {
    return (
        <React.Fragment>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/auctions/:id(\d+)" exact={true} component={AuctionDetailsPage} />
            <Route path="/auctions/new" exact={true} component={NewAuctionPage} />
        </React.Fragment>
    );
}

export default SubastifyPageBody;
