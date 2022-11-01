"use strict";
exports.__esModule = true;
var manageProduct_1 = require("../services/manageProduct");
var manageCustomer_1 = require("../services/manageCustomer");
var manageOrder_1 = require("../services/manageOrder");
var product_1 = require("../models/product");
var customer_1 = require("../models/customer");
var order_1 = require("../models/order");
var input = require('readline-sync');
var manageProduct = new manageProduct_1.ManageProduct();
var manageCustomer = new manageCustomer_1.ManageCustomer();
var manageOrder = new manageOrder_1.ManageOrder();
function mainMenu() {
    var menu = "\n        ------MENU CH\u00CDNH------\n        1.Th\u00EAm, s\u1EEDa, xo\u00E1 s\u1EA3n ph\u1EA9m\n        2.Th\u00EAm kh\u00E1ch h\u00E0ng\n        3.Mua s\u1EA3n ph\u1EA9m\n        4.Hi\u1EC3n th\u1ECB ho\u00E1 \u0111\u01A1n\n        0.Tho\u00E1t\n        ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Nhập lựa chọn của bạn: ');
        switch (choice) {
            case 1:
                productMenu();
                break;
            case 2:
                customerMenu();
                break;
            case 3:
                orderMenu();
                break;
            case 4:
                var id = +input.question('Nhap id hoa don can in :  ');
                console.log(manageOrder.findByID(id));
                break;
        }
    } while (choice != 0);
}
//---------product menu-----------
function productMenu() {
    var productMenu = "\n        ------MENU S\u1EA2N PH\u1EA8M------\n        1.Th\u00EAm s\u1EA3n ph\u1EA9m\n        2.S\u1EEDa s\u1EA3n ph\u1EA9m\n        3.Xo\u00E1 s\u1EA3n ph\u1EA9m\n        4.Hi\u1EC3n th\u1ECB to\u00E0n b\u1ED9 s\u1EA3n ph\u1EA9m\n        0.Tho\u00E1t\n        ";
    var choice;
    do {
        console.log(productMenu);
        choice = +input.question('Nhập lựa chọn của bạn: ');
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                editProduct();
                break;
            case 3:
                deleteProduct();
                break;
            case 4:
                console.table(manageProduct.showProductList());
                break;
        }
    } while (choice != 0);
}
function addProduct() {
    var id = +input.question('Nhập id sản phẩm: ');
    var name = input.question('Nhập tên sản phẩm: ');
    var quantity = +input.question('Nhập số lượng sản phẩm: ');
    var price = +input.question('Nhập giá sản phẩm: ');
    var product = new product_1.Product(id, name, quantity, price);
    manageProduct.add(product);
}
function editProduct() {
    var id = +input.question('Nhập id sản phẩm: ');
    var name = input.question('Nhập tên sản phẩm: ');
    var quantity = +input.question('Nhập số lượng sản phẩm: ');
    var price = +input.question('Nhập giá sản phẩm: ');
    var product = new product_1.Product(id, name, quantity, price);
    manageProduct.edit(id, product);
}
function deleteProduct() {
    var id = +input.question('Nhập id sản phẩm: ');
    manageProduct["delete"](id);
}
//----------customer menu----------
function customerMenu() {
    var customerMenu = "\n        ------MENU KH\u00C1CH H\u00C0NG------\n        1.Th\u00EAm kh\u00E1ch h\u00E0ng\n        2.S\u1EEDa kh\u00E1ch h\u00E0ng\n        3.Xo\u00E1 kh\u00E1ch h\u00E0ng\n        4.Hi\u1EC3n th\u1ECB to\u00E0n b\u1ED9 kh\u00E1ch h\u00E0ng\n        0.Tho\u00E1t\n        ";
    var choice;
    do {
        console.log(customerMenu);
        choice = +input.question('Nhập lựa chọn của bạn: ');
        switch (choice) {
            case 1:
                addCustomer();
                break;
            case 2:
                editCustomer();
                break;
            case 3:
                deleteCustomer();
                break;
            case 4:
                console.table(manageCustomer.showCustomerList());
                break;
        }
    } while (choice != 0);
}
function addCustomer() {
    var id = +input.question("Nhập id khách hàng: ");
    var name = input.question("Nhập tên khách hàng: ");
    var customer = new customer_1.Customer(id, name);
    manageCustomer.add(customer);
    console.log("nhap thanh cong");
}
function editCustomer() {
    var id = +input.question("Nhập id khách hàng: ");
    var name = input.question("Nhập tên khách hàng: ");
    var customer = new customer_1.Customer(id, name);
    manageCustomer.edit(id, customer);
}
function deleteCustomer() {
    var id = +input.question("Nhập id khách hàng: ");
    manageCustomer["delete"](id);
}
//--------------order menu--------------
function orderMenu() {
    var id = +input.question('Nhập id khách hàng: ');
    if (manageCustomer.findIndexByID(id) === -1) {
        console.log('Khách hàng không tồn tại');
    }
    else {
        var customer = manageCustomer.findByID(id);
        for (var i = 0; i < manageProduct.productList.length; i++) {
            console.log("id: ".concat(manageProduct.productList[i].id, ", name: ").concat(manageProduct.productList[i].name));
        }
        id = +input.question('Nhập id của sản phẩm: ');
        var idOrder = +input.question('Nhập id của hoá đơn: ');
        var time = input.question('Nhập thời gian mua hàng: ');
        var amount = +input.question('Nhập số lượng cần mua: ');
        var orderDetail = new order_1.Order(idOrder, customer, time);
        var product = manageProduct.findByID(id);
        manageProduct.edit(id, new product_1.Product(product.id, product.name, product.quantity, product.price));
        product.quantity = amount;
        orderDetail.addProduct(product);
        manageOrder.add(orderDetail);
    }
}
mainMenu();
