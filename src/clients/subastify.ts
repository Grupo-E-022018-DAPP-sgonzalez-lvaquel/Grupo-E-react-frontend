import { AxiosInstance, AxiosRequestConfig } from 'axios';

import IAuction, { INewAuction } from 'src/model/IAuction';
import IUser from 'src/model/IUser';


export interface ISubastifyClient {
    getUserByKid(kid: string): Promise<IUser>;
    createAuction(auctionOptions: INewAuction): Promise<IAuction>;
    getRecentAuctions(): Promise<IAuction[]>;
    getAuctions(): Promise<IAuction[]>;
    getAuction(id: number): Promise<IAuction>;
    setAccessToken(token: string | undefined): void
}

const AUCTIONS_ENDPOINT = '/auctions'
const RECENT_AUCTIONS_ENDPOINT = '/auctions/recent'
const USERS_ENDPOINT = '/users'

export class SubastifyClient implements ISubastifyClient {

    private accessToken: string;

    constructor(private http: AxiosInstance) { }

    public createAuction(auctionOptions: INewAuction): Promise<IAuction> {
        return this.http.post(AUCTIONS_ENDPOINT, auctionOptions, this.options).then(response => response.data);
    }

    public getAuctions() {
        return this.http.get(AUCTIONS_ENDPOINT, this.options).then(response => response.data);
    }

    public getRecentAuctions() {
        return this.http.get(RECENT_AUCTIONS_ENDPOINT, this.options).then(response => response.data);
    }

    public getAuction(id: number) {
        return this.http.get(`${AUCTIONS_ENDPOINT}/${id}`, this.options).then(response => response.data);
    }

    public setAccessToken(token: string){
        this.accessToken = token;
    }

    private get options(): AxiosRequestConfig {
        const options: AxiosRequestConfig = {headers:{}}
        
        if(this.accessToken){
            options.headers.Authorization = `Bearer ${this.accessToken}` 
        }

        return options;
    }

    public getUserByKid(kid: string): Promise<IUser> {
        return this.http.patch(`${USERS_ENDPOINT}`, {kid}).then(response => response.data);
    }
}
