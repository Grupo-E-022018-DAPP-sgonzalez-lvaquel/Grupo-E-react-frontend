import * as React from 'react';
import { connect } from 'react-redux';

import { IAuction } from 'src/model';
import { IStore } from 'src/store/reducers/rootReducer';
import { getAuctions, getRecentAuctions } from 'src/store/selectors';
import AuctionsList from './AuctionsList';


interface IAuctionsFeedProps extends React.Props<any> {
    recent?: boolean;
    getRecentAuctions: () => IAuction[];
    getAuctions: () => IAuction[];
}

function AuctionsFeed(props: IAuctionsFeedProps) {
    const auctionsGetter = props.recent ? props.getRecentAuctions : props.getAuctions;
    return (
        <AuctionsList auctions={auctionsGetter()} />
    );
}

function mapStateToProps(state: IStore) {
    return {
        getAuctions: () => getAuctions(state),
        getRecentAuctions: () => getRecentAuctions(state),
    }
}

export default connect(mapStateToProps)(AuctionsFeed);
