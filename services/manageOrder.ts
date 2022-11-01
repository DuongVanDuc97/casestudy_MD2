import {Manager} from "./managerInterface";
import {Order} from "../models/order";

export class ManageOrder implements Manager<Order> {
    orderList: Order[] = [];

    add(t: Order) {
        this.orderList.push(t)
    }

    delete(id: number) {
        let index = this.findIndexByID(id);
        this.orderList.splice(index, 1)
    }

    edit(id: number, t: Order) {
        let index = this.findIndexByID(id);
        this.orderList[index] = t;
    }

    findByID(id: number) {
        let index = this.findIndexByID(id);
        return this.orderList[index];
    }

    findIndexByID(id) {
        for (let i = 0; i < this.orderList.length; i++) {
            if (this.orderList[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    showOrderList() {
        return this.orderList;
    }

}