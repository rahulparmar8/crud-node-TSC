"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../models/users"));
class Product {
    constructor() {
        // Add Product Data //
        this.AddProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { product_name, category_id, product_price, image_url } = req.body;
                const data = new users_1.default({
                    product_name: product_name,
                    category_id: category_id,
                    product_price: product_price,
                    image_url: image_url,
                });
                const result = yield data.save();
                res.status(200).json({ message: "Data Saved" });
            }
            catch (error) {
                console.log(error);
            }
        });
        // Get All Product Data //
        this.getProductData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tabel = yield users_1.default.findById({ _id: req.params.id });
                return res.status(200).json(tabel);
            }
            catch (error) {
                console.log(error);
            }
        });
        // All Product List //
        this.productList = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.default.find();
                return res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
            }
        });
        // Product Update //
        this.updateProductData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.default.findByIdAndUpdate(req.params.id, req.body);
                return res.status(200).json({ message: "Data Update Successfully" });
            }
            catch (error) {
                console.log(error);
            }
        });
        //Delete Product Data //
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield users_1.default.findByIdAndDelete(req.params.id);
                res.status(200).json({ message: "Data Deleted" });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = Product;
