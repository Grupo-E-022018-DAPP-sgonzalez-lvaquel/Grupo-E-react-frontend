import * as React from 'react';
import { connect } from 'react-redux';

import "./AuctionDetailsPage.css";

import { Button } from 'src/components/common';

import { AuctionBettorsAmount } from './AuctionBettorsAmount';

import Row from 'src/components/common/style/Row';

import { IAuction } from 'src/model';
import { fetchAuction as fetchAuctionAction} from 'src/store/actions/auctions';
import { IStore } from 'src/store/reducers/rootReducer';
import { getAuction as getAuctionSelector } from 'src/store/selectors/auctions';

interface IAuctionsDetailsPageProps extends React.Props<any> {
  getAuction: (id: number) => IAuction;
  match: any;
  fetchAuction: (id: number) => void;
}

function AuctionDetailsPage({match, getAuction, fetchAuction}: IAuctionsDetailsPageProps) {
  const auction = getAuction(match.params.id);
    return (
      <div className="row">
        <Row>
          <div className="d-flex col-xs-8 container">

            <div className="col-xs-6 auction-info">
              <div className="container">
                <div className="d-flex time-info">
                  <div className="d-flex col-xs-7">
                    <h1>{ auction.title }</h1>
                  </div>
                  <div className="d-flex col-xs-1">
                    <span>Finaliza en: { auction.endDate }</span>
                  </div>
                </div>
                <div className="d-flex container col-xs-8">
                  <span className="auction-description">{ auction.description }</span>
                </div>
              </div>
            </div>

            <div  className="col-xs-2 price-info container">
              <div className="price-info-item">
                <span>Tramo actual - n° 15</span>
                <h2>$533</h2>
              </div>
              <hr/>
              <div className="price-info-item">
                <span>Tramo n°16
                  <h3>$299</h3>
                </span>
                <Button variant='primary'>
                  <label>Realizar Oferta</label>
                </Button>
              </div>
              <hr/>
              <AuctionBettorsAmount auctionId={auction.id}/>
              <hr/>
              <div>
                <h3>Avance de la subasta</h3>
                <h5>user1 Tramo 14 16/10/2018 11:00hs.</h5>
                <h5>user2 Tramo 14 16/10/2018 11:00hs.</h5>
                <h5>user3 Tramo 14 16/10/2018 11:00hs.</h5>
                <h5>user4 Tramo 14 16/10/2018 11:00hs.</h5>
                <h5>user5 Tramo 14 16/10/2018 11:00hs.</h5>
              </div>
            </div>

          </div>
        </Row>
      </div>
    );
  }

function mapStateToProps(state: IStore){
  return {
    getAuction: (id: number) => getAuctionSelector(state, id), // le doy una function y me devuelve props que le voy a pasar a mi componente
  }
}

export default connect(mapStateToProps, {fetchAuction: fetchAuctionAction})(AuctionDetailsPage); // conecto con el store y hace que observe un evento
