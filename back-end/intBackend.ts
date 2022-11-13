export interface intBackend
{
    signUp(username:string,password:string): string;
    login(username:string,password:string): string;
    addPoints(): number;
    removePoints(): number;
    getPoints(): number;
    newPurchase();
    addTransaction(amount:number,category:string,note:string);
    removeTransaction();
    getName(): string;
    getLeft(): number;
    getSpent(): number;
}