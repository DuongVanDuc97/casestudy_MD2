"use strict";
exports.__esModule = true;
exports.ManageProduct = void 0;
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        this.productList = [];
    }
    ManageProduct.prototype.add = function (t) {
        this.productList.push(t);
    };
    ManageProduct.prototype["delete"] = function (id) {
        var index = this.findIndexByID(id);
        this.productList.splice(index, 1);
    };
    ManageProduct.prototype.edit = function (id, t) {
        var index = this.findIndexByID(id);
        this.productList[index] = t;
    };
    ManageProduct.prototype.findByID = function (id) {
        var index = this.findIndexByID(id);
        return this.productList[index];
    };
    ManageProduct.prototype.findIndexByID = function (id) {
        for (var i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id === id) {
                return i;
            }
        }
        return -1;
    };
    ManageProduct.prototype.showProductList = function () {
        return this.productList;
    };
    return ManageProduct;
}());
exports.ManageProduct = ManageProduct;
