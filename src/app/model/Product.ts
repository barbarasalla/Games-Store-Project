import { Category } from "./category";

export class Product{

    public id: number;
    public name: string;
    public descrition: string;
    public photo: string;
    public price: number;
    public console: string;
    public releaseDate: Date;
    public stock: number;
    public category: Category;

}