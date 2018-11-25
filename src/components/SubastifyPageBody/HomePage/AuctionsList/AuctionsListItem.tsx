import * as React from 'react';
import { Link } from 'react-router-dom';

import Card from 'src/components/common/style/Card';
import CardBody from 'src/components/common/style/CardContent';
import CardText from 'src/components/common/style/CardText';
import CardTitle from 'src/components/common/style/CardTitle';
import { IAuction } from 'src/model';


interface IAuctionsListItemProps extends React.Props<any> {
    auction: IAuction;
}

function AuctionsListItem({ auction }: IAuctionsListItemProps) {
    return (
        <div style={{ width: "15rem" }}>
            <Link to={`/auctions/${auction.id}`}>
                <Card>
                    <div style={{ overflow: 'hidden', width: '100%', height: '70px', backgroundColor: '#eee' }} >
                        <img className="card-img-top" src={auction.imageUrl} alt={auction.imageUrl} />
                    </div>
                    <CardBody>
                        <CardTitle>
                            {auction.title}
                        </CardTitle>
                        <CardText>
                            {auction.description}
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
        </div>
    );
}

export default AuctionsListItem;