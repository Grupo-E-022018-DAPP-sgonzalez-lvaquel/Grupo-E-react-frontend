import * as React from 'react';

import { IAuction } from 'src/model';
import AuctionsListItem from './AuctionsListItem';


interface IAuctionsListProps extends React.Props<any> {
    auctions: IAuction[];
}

function AuctionsList({ auctions }: IAuctionsListProps) {
    return (
        <React.Fragment>
            {auctions.map(auction =>
                <AuctionsListItem key={auction.id} auction={auction} />
            )}
        </React.Fragment>
    );
}

export default AuctionsList;