import * as React from 'react'
import { Translate } from 'react-localize-redux';
import { connect } from 'react-redux';

import { fetchAuctions, fetchRecentAuctions } from 'src/store/actions/auctions';
import AuctionsFeed from './AuctionsFeed';

import './AuctionsFeeds.css';

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
                <div className="feed-container" >
                    <div className="feed-title row">
                        <Translate id="auction.feed.normal.title" />
                    </div>
                    <AuctionsFeed />
                </div>
                <div className="feed-container" >
                    <div className="feed-title row">
                        <Translate id="auction.feed.recent.title" />
                    </div>
                    <AuctionsFeed recent={true} />
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, {
    fetchAuctions,
    fetchRecentAuctions,
})(AuctionFeeds);
