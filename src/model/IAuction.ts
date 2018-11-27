export interface INewAuction {
    ownerId: number;
    endDate: string;
    title: string;
    description: string;
    imageUrl: string;
    initialPrice: string;
}

interface IAuction extends INewAuction {
    id: number;
    state: string;
    bets: [number];
}

export default IAuction;
