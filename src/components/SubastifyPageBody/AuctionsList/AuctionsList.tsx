import * as React from 'react';

import Container from 'src/components/common/Container';
import Row from 'src/components/common/Row';
import { IAuction } from 'src/model';
import AuctionsListItem from './AuctionsListItem';


interface IAuctionsListProps extends React.Props<any> {
    auctions: IAuction[];
}

function AuctionsList({ auctions }: IAuctionsListProps) {
    return (
        <Container>
            <Row>
                {auctions.map(auction =>
                    <AuctionsListItem key={auction.id} auction={auction} />
                )}
            </Row>
        </Container>
    );
}

export default AuctionsList;