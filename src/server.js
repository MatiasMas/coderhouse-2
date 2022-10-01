import express from 'express';
import http from 'http';
import path from 'path';
import {fileURLToPath} from 'url';
import dotenv from 'dotenv';
import {ProductsContainer} from "./ProductsContainer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = http.createServer(app);
const productsRouter = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./src/public'));

dotenv.config();
const productsContainer = new ProductsContainer('src/products.txt');

productsRouter.get('/', async (req, res) => {
    res.status(200).json(await productsContainer.getAll());
});

productsRouter.get('/randomProduct', async (req, res) => {
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const allProducts = await productsContainer.getAll();
    const randomProduct = allProducts[randomNumber(0, allProducts.length - 1)];

    res.status(200).json(randomProduct);
});

app.use('/api/products', productsRouter);

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server has initiated on port http://localhost:${PORT}`);
});
server.on('error', (err) => console.log(err));