import * as React from 'react';
import { connect } from 'react-redux';

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
  const auction = getAuction(match.params.id)
  if (auction) {
    return (
        <div>
            dueño {auction.ownerId}
            Fecha de fin {auction.endDate}
            AuctionDetailsPage {match.params.id}
        </div>
    );
  } else {
    fetchAuction(match.params.id)
    return <h1>Cargando</h1>
  }
}

function mapStateToProps(state: IStore){
  return {
    getAuction: (id: number) => getAuctionSelector(state, id), // le doy una function y me devuelve props que le voy a pasar a mi componente
  }
}

export default connect(mapStateToProps, {fetchAuction: fetchAuctionAction})(AuctionDetailsPage); // conecto con el store y hace que observe un evento
