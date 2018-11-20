export interface INewAuction {
    ownerId: string;
    endDate: string;
    title: string;
    description: string;
    imageUrl: string;
    initialPrice: string;
}

interface IAuction extends INewAuction {
    id: number;
    state: string;
}

export default IAuction;
