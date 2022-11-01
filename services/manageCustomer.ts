import {Manager} from "./managerInterface";
import {Customer} from "../models/customer";

export class ManageCustomer implements Manager<Customer> {
    customerList: Customer[] = [];

    add(t: Customer) {
        this.customerList.push(t)
    }

    delete(id: number) {
        let index = this.findIndexByID(id)
        this.customerList.splice(index, 1)
    }

    edit(id: number, t: Customer) {
        let index = this.findIndexByID(id);
        this.customerList[index] = t;
    }

    findByID(id: number) {
        let index = this.findIndexByID(id);
        return this.customerList[index]
    }

    findIndexByID(id) {
        for (let i = 0; i < this.customerList.length; i++) {
            if (this.customerList[i].id === id) {
                return i
            }
        }
        return -1;
    }

    showCustomerList() {
        return this.customerList;
    }

}