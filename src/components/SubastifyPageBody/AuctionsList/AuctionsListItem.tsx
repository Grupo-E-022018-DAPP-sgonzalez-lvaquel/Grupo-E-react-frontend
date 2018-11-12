import * as React from 'react';

import Card from 'src/components/common/Card';
import CardBody from 'src/components/common/CardContent';
import { IAuction } from 'src/model';


interface IAuctionsListItemProps extends React.Props<any> {
    auction: IAuction;
}

function AuctionsListItem({ auction }: IAuctionsListItemProps) {
    return (
        <Card>
            <CardBody>
                auction id: {auction.id}
            </CardBody>
        </Card>
    );
}

export default AuctionsListItem;