import * as React from 'react';

function AuctionDetailsPage({match}: any) {
    return (
        <div>
            AuctionDetailsPage {match.params.id}
        </div>
    );
}

export default AuctionDetailsPage;