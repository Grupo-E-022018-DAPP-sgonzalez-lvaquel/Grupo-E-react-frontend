import * as React from 'react'
import { connect } from 'react-redux';

import { fetchAuctions, fetchRecentAuctions } from 'src/store/actions/auctions';
import AuctionsFeed from './AuctionsFeed';


interface IAuctionFeedsProps extends React.Props<any> {
    fetchAuctions: () => void;
    fetchRecentAuctions: () => void;
}

class AuctionFeeds extends React.Component<IAuctionFeedsProps> {

    public componentDidMount() {
        this.props.fetchAuctions();
        this.props.fetchRecentAuctions();
    }

    public render() {
        return (
            <React.Fragment>
                <AuctionsFeed />
                <AuctionsFeed recent={true} />
            </React.Fragment>
        );
    }
}

export default connect(null, {
    fetchAuctions,
    fetchRecentAuctions,
})(AuctionFeeds);
