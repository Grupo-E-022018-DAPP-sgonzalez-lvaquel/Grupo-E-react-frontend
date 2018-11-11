import * as React from 'react';

import { IAuction } from 'src/model';


interface IAuctionsListItemProps extends React.Props<any> {
    auction: IAuction;
}

function AuctionsListItem({ auction }: IAuctionsListItemProps) {
    return (
        <div>
            auction
        </div>
    );
}

export default AuctionsListItem;