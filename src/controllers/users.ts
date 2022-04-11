import express, { Request, Response } from "express";
import ProductModel from "../models/users";

export default class Product {

    // Add Product Data //
    AddProduct = async (req: Request, res: Response) => {
        try {
            const { product_name, category_id, product_price, image_url } = req.body
            const data = new ProductModel({
                product_name: product_name,
                category_id: category_id,
                product_price: product_price,
                image_url: image_url,
            });
            const result = await data.save();
            res.status(200).json({ message: "Data Saved" })
        } catch (error) {
            console.log(error);
        }
    }
    // Get All Product Data //
    getProductData = async (req: Request, res: Response) => {
        try {
            const tabel = await ProductModel.findById({ _id: req.params.id });
            return res.status(200).json(tabel)
        } catch (error) {
            console.log(error);
        }
    }

    // All Product List //
    productList = async (req: Request, res: Response) => {
        try {
            const result = await ProductModel.find()
            return res.status(200).json(result)
        } catch (error) {
            console.log(error);
        }
    }

    // Product Update //
    updateProductData = async (req: Request, res: Response) => {
        try {
            const result = await ProductModel.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json({ message: "Data Update Successfully" })
        } catch (error) {
            console.log(error);
        }
    }

    //Delete Product Data //
    deleteProduct = async (req: Request, res: Response) => {
        try {
            const result = await ProductModel.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Data Deleted" })
        } catch (error) {
            console.log(error);
        }
    }
}