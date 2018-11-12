import * as React from 'react';
import { Route } from 'react-router';

import AuctionsFeeds from './AuctionsFeeds';


function SubastifyPageBody(props: React.Props<any>) {
    return (
        <Route path="/" exact={true} component={AuctionsFeeds} />
    );
}

export default SubastifyPageBody;
