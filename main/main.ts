import {ManageProduct} from "../services/manageProduct";
import {ManageCustomer} from "../services/manageCustomer";
import {ManageOrder} from "../services/manageOrder";
import {Product} from "../models/product";
import {Customer} from "../models/customer";
import {Order} from "../models/order";

let input = require('readline-sync');
let manageProduct: ManageProduct = new ManageProduct();
let manageCustomer: ManageCustomer = new ManageCustomer();
let manageOrder: ManageOrder = new ManageOrder();

function mainMenu() {
    let menu = `
        ------MENU CHÍNH------
        1.Thêm, sửa, xoá sản phẩm
        2.Thêm khách hàng
        3.Mua sản phẩm
        4.Hiển thị hoá đơn
        0.Thoát
        `;
    let choice;

    do {
        console.log(menu);
        choice = +input.question('Nhập lựa chọn của bạn: ')
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
                let id =+input.question('Nhap id hoa don can in :  ');
                console.log( manageOrder.findByID(id))
                break;
        }
    } while (choice != 0);
}

//---------product menu-----------
function productMenu() {
    let productMenu = `
        ------MENU SẢN PHẨM------
        1.Thêm sản phẩm
        2.Sửa sản phẩm
        3.Xoá sản phẩm
        4.Hiển thị toàn bộ sản phẩm
        0.Thoát
        `;
    let choice;

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
                deleteProduct()
                break;
            case 4:
                console.table(manageProduct.showProductList());
                break;
        }
    } while (choice != 0)
}

function addProduct() {
    let id = +input.question('Nhập id sản phẩm: ');
    let name = input.question('Nhập tên sản phẩm: ');
    let quantity = +input.question('Nhập số lượng sản phẩm: ');
    let price = +input.question('Nhập giá sản phẩm: ');
    let product: Product = new Product(id, name, quantity, price)
    manageProduct.add(product)
}

function editProduct() {
    let id = +input.question('Nhập id sản phẩm: ');
    let name = input.question('Nhập tên sản phẩm: ');
    let quantity = +input.question('Nhập số lượng sản phẩm: ');
    let price = +input.question('Nhập giá sản phẩm: ');
    let product: Product = new Product(id, name, quantity, price)
    manageProduct.edit(id, product)
}

function deleteProduct() {
    let id = +input.question('Nhập id sản phẩm: ');
    manageProduct.delete(id)
}

//----------customer menu----------
function customerMenu() {
    let customerMenu = `
        ------MENU KHÁCH HÀNG------
        1.Thêm khách hàng
        2.Sửa khách hàng
        3.Xoá khách hàng
        4.Hiển thị toàn bộ khách hàng
        0.Thoát
        `
    let choice
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
    } while (choice != 0)
}

function addCustomer() {
    let id = +input.question("Nhập id khách hàng: ");
    let name = input.question("Nhập tên khách hàng: ");
    let customer: Customer = new Customer(id, name);
    manageCustomer.add(customer);
    console.log("nhap thanh cong")
}

function editCustomer() {
    let id = +input.question("Nhập id khách hàng: ");
    let name = input.question("Nhập tên khách hàng: ");
    let customer: Customer = new Customer(id, name);
    manageCustomer.edit(id, customer);
}

function deleteCustomer() {
    let id = +input.question("Nhập id khách hàng: ");
    manageCustomer.delete(id);
}

//--------------order menu--------------
function orderMenu() {
    let id = +input.question('Nhập id khách hàng: ');
    if (manageCustomer.findIndexByID(id) === -1) {
        console.log('Khách hàng không tồn tại');
    } else {
        let customer = manageCustomer.findByID(id);
        for (let i = 0; i < manageProduct.productList.length; i++) {
            console.log(`id: ${manageProduct.productList[i].id}, name: ${manageProduct.productList[i].name}`);
        }
        id = +input.question('Nhập id của sản phẩm: ');
        let idOrder = +input.question('Nhập id của hoá đơn: ');
        let time = input.question('Nhập thời gian mua hàng: ');
        let amount = +input.question('Nhập số lượng cần mua: ');
        let orderDetail = new Order(idOrder, customer, time);
        let product = manageProduct.findByID(id);
        product.quantity -= amount;
        manageProduct.edit(id, new Product(product.id, product.name, product.quantity, product.price));
        orderDetail.addProduct(product);
        manageOrder.add(orderDetail)
    }
}

mainMenu();