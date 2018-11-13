import { AxiosInstance } from 'axios';

import IAuction from 'src/model/IAuction';
import IAuctionOptions from 'src/model/IAuctionOptions';


export interface ISubastifyClient {
    createAuction(auctionOptions: IAuctionOptions): Promise<IAuction>;
    getRecentAuctions(): Promise<IAuction[]>;
    getAuctions(): Promise<IAuction[]>;
    getAuction(id: number): Promise<IAuction>;
}

const AUCTIONS_ENDPOINT = '/auctions'
const RECENT_AUCTIONS_ENDPOINT = '/auctions/recent'

export class SubastifyClient implements ISubastifyClient {

    constructor(private http: AxiosInstance) { }

    public createAuction(auctionOptions: IAuctionOptions): Promise<IAuction> {
        return this.http.post(AUCTIONS_ENDPOINT, auctionOptions).then(response => response.data);
    }

    public getAuctions() {
        return this.http.get(AUCTIONS_ENDPOINT).then(response => response.data);
    }

    public getRecentAuctions() {
        return this.http.get(RECENT_AUCTIONS_ENDPOINT).then(response => response.data);
    }

    public getAuction(id: number) {
      return this.http.get(`${AUCTIONS_ENDPOINT}/${id}`).then(response => response.data);
    }
}
