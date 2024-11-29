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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.fetchProductById = exports.fetchAllProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Fetch all products
const fetchAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.findMany();
});
exports.fetchAllProducts = fetchAllProducts;
// Fetch a product by id
const fetchProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.findUnique({ where: { id } });
});
exports.fetchProductById = fetchProductById;
// Create a product
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.create({ data });
});
exports.createProduct = createProduct;
// Update a product
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.update({ where: { id }, data });
});
exports.updateProduct = updateProduct;
// Delete a product
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.product.delete({ where: { id } });
});
exports.deleteProduct = deleteProduct;
exports.default = {
    fetchAllProducts: exports.fetchAllProducts,
    fetchProductById: exports.fetchProductById,
    createProduct: exports.createProduct,
    updateProduct: exports.updateProduct,
    deleteProduct: exports.deleteProduct,
};
