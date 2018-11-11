import * as React from 'react'

import AuctionsFeed from './AuctionsFeed';

function SubastifyPageBody(props: React.Props<any>) {
    return (
        <React.Fragment>
            <AuctionsFeed />
            <AuctionsFeed recent={true} />
        </React.Fragment>
    );
}

export default SubastifyPageBody;
