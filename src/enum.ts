export enum CustomerType{
    PLATINUM = 3,
    REGULAR = 0,
    GOLD = 2,
    

}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType;
}