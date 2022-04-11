"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../controllers/users"));
const product = new users_1.default();
const router = express_1.default.Router();
router.post('/add', product.AddProduct);
router.get('/:id', product.getProductData);
router.get('/getall', product.productList);
router.put('/:id', product.updateProductData);
router.delete('/:id', product.deleteProduct);
exports.default = router;
