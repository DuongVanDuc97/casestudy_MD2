"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(id, customer, time) {
        this.cart = [];
        this.totalPrice = 0;
        this.id = id;
        this.customer = customer;
        this.time = time;
    }
    Order.prototype.addProduct = function (product) {
        this.cart.push(product);
        this.totalPrice += product.price * product.quantity;
    };
    Order.prototype.showCart = function () {
        return this.cart;
    };
    return Order;
}());
exports.Order = Order;
