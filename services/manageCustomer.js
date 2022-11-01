"use strict";
exports.__esModule = true;
exports.ManageCustomer = void 0;
var ManageCustomer = /** @class */ (function () {
    function ManageCustomer() {
        this.customerList = [];
    }
    ManageCustomer.prototype.add = function (t) {
        this.customerList.push(t);
    };
    ManageCustomer.prototype["delete"] = function (id) {
        var index = this.findIndexByID(id);
        this.customerList.splice(index, 1);
    };
    ManageCustomer.prototype.edit = function (id, t) {
        var index = this.findIndexByID(id);
        this.customerList[index] = t;
    };
    ManageCustomer.prototype.findByID = function (id) {
        var index = this.findIndexByID(id);
        return this.customerList[index];
    };
    ManageCustomer.prototype.findIndexByID = function (id) {
        for (var i = 0; i < this.customerList.length; i++) {
            if (this.customerList[i].id === id) {
                return i;
            }
        }
        return -1;
    };
    ManageCustomer.prototype.showCustomerList = function () {
        return this.customerList;
    };
    return ManageCustomer;
}());
exports.ManageCustomer = ManageCustomer;
