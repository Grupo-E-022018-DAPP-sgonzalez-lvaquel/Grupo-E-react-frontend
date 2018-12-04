import * as React from 'react';

import { connect } from 'react-redux';

import { IStore } from 'src/store/reducers/rootReducer';

import { getAuctionBettorsAmount as getAuctionBettorsAmountSelector } from 'src/store/selectors/auctions';

interface IAuctionBettorsAmountProps extends React.Props<any> {
    auctionId: number;
    getAuctionBettorsAmount: (id: number) => number
}

export function AuctionBettorsAmount({auctionId, getAuctionBettorsAmount}: IAuctionBettorsAmountProps) {
    return (
      <div className="price-info-item">
        <h3>Cantidad de postores</h3>
        <h5>
          {
            "postores en la subasta: " + 
            getAuctionBettorsAmount(auctionId)
          }
        </h5>
      </div>
    )
}

function mapStateToProps(state: IStore){
  return {
    getAuctionBettorsAmount: (id: number) => getAuctionBettorsAmountSelector(state, id), // le doy una function y me devuelve props que le voy a pasar a mi componente
  }
}
export default connect(mapStateToProps)(AuctionBettorsAmount);
