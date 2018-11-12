import * as React from 'react';
import { Link } from 'react-router-dom';

import Card from 'src/components/common/Card';
import CardBody from 'src/components/common/CardContent';
import { IAuction } from 'src/model';


interface IAuctionsListItemProps extends React.Props<any> {
    auction: IAuction;
}

function AuctionsListItem({ auction }: IAuctionsListItemProps) {
    return (
        <Link to={`/auction/${auction.id}`}>
            <Card>
                <CardBody>
                    auction id: {auction.id}
                </CardBody>
            </Card>
        </Link>
    );
}

export default AuctionsListItem;