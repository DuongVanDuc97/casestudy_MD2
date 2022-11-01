"use strict";
exports.__esModule = true;
exports.ManageOrder = void 0;
var ManageOrder = /** @class */ (function () {
    function ManageOrder() {
        this.orderList = [];
    }
    ManageOrder.prototype.add = function (t) {
        this.orderList.push(t);
    };
    ManageOrder.prototype["delete"] = function (id) {
        var index = this.findIndexByID(id);
        this.orderList.splice(index, 1);
    };
    ManageOrder.prototype.edit = function (id, t) {
        var index = this.findIndexByID(id);
        this.orderList[index] = t;
    };
    ManageOrder.prototype.findByID = function (id) {
        var index = this.findIndexByID(id);
        return this.orderList[index];
    };
    ManageOrder.prototype.findIndexByID = function (id) {
        for (var i = 0; i < this.orderList.length; i++) {
            if (this.orderList[i].id === id) {
                return i;
            }
        }
        return -1;
    };
    ManageOrder.prototype.showOrderList = function () {
        return this.orderList;
    };
    return ManageOrder;
}());
exports.ManageOrder = ManageOrder;
