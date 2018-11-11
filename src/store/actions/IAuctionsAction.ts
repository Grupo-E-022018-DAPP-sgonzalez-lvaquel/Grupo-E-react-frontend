import { Action } from 'redux';
import { IAuction } from 'src/model';

interface IAuctionsAction extends Action {
    auctions: IAuction[],
}

export default IAuctionsAction