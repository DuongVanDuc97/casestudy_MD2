import {Customer} from "./customer";
import {Product} from "./product";

export class Order {
    id: number;
    customer: Customer;
    time: string;
    cart: Product[] = [];
    totalPrice: number = 0;

    constructor(id: number, customer: Customer, time: string) {
        this.id = id;
        this.customer = customer;
        this.time = time
    }

    addProduct(product: Product) {
        this.cart.push(product);
        this.totalPrice += product.price * product.quantity
    }

    showCart() {
        return this.cart;
    }
}