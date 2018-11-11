import * as React from 'react';

import { IAuction } from 'src/model';


interface IAuctionsListItemProps extends React.Props<any> {
    auction: IAuction;
}

function AuctionsListItem({ auction }: IAuctionsListItemProps) {
    return (
        <div>
            auction id: {auction.id}
        </div>
    );
}

export default AuctionsListItem;