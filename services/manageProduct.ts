import {Manager} from "./managerInterface";
import {Product} from "../models/product";

export class ManageProduct implements Manager<Product> {
    productList: Product[] = [];

    add(t: Product) {
        this.productList.push(t);
    }

    delete(id: number) {
        let index = this.findIndexByID(id);
        this.productList.splice(index, 1)
    }

    edit(id: number, t: Product) {
        let index = this.findIndexByID(id);
        this.productList[index] = t;
    }

    findByID(id: number) {
        let index = this.findIndexByID(id);
        return this.productList[index]
    }

    findIndexByID(id: number): number {
        for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id === id) {
                return i
            }
        }
        return -1;
    }

    showProductList() {
        return this.productList
    }

}