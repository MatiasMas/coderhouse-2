import {ProductsContainer} from "./ProductsContainer.js";

let productsContainer = new ProductsContainer("products.txt");

const product1 = {title: "Iphone 10", price: 1000.1, thumbnail: "www.example.com"};
const product2 = {title: "Iphone 11", price: 2000.2, thumbnail: "www.example.com"};
const product3 = {title: "Iphone 12", price: 3000.3, thumbnail: "www.example.com"};
const product4 = {title: "Iphone 13", price: 4000.4, thumbnail: "www.example.com"};
const product5 = {title: "Iphone 14", price: 5000.5, thumbnail: "www.example.com"};

// console.log(await productsContainer.save(product1));
// console.log(await productsContainer.save(product2));
// console.log(await productsContainer.save(product3));
// console.log(await productsContainer.save(product4));

// console.table(await productsContainer.getById(2));
// await productsContainer.deleteById(2);
// await productsContainer.deleteAll();

console.table(await productsContainer.getAll());


