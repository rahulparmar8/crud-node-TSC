import express, { Router } from "express";
import Product from '../controllers/users'

const product = new Product();
const router = express.Router();


router.post('/add', product.AddProduct)
router.get('/:id', product.getProductData)
router.get('/getall', product.productList)
router.put('/:id', product.updateProductData)
router.delete('/:id', product.deleteProduct)

export default router