import { AxiosInstance } from 'axios';

export interface ISubastifyClient {
    getRecentAuctions(): any;
    getAuctions(): any;
}

const AUCTIONS_ENDPOINT = '/auctions'
const RECENT_AUCTIONS_ENDPOINT = '/auctions/recent'

export class SubastifyClient implements ISubastifyClient {

    constructor(private http: AxiosInstance) { }

    public getAuctions() {
        return this.http.get(AUCTIONS_ENDPOINT).then(response => response.data);
    }

    public getRecentAuctions() {
        return this.http.get(RECENT_AUCTIONS_ENDPOINT).then(response => response.data);
    }
}