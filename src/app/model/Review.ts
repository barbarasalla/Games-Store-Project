import { Product } from "./Product";
import { User } from "./User";

export class Review{
    public id: number;
    public text: string;
    public reviewTitle: string;
    public publicationDate: Date;
    public rating: number;
    public user: User;
    public produsct: Product;
}