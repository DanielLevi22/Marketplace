"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var path_1 = __importDefault(require("path"));
var users_1 = require("./collections/users");
var dotenv_1 = __importDefault(require("dotenv"));
var products_1 = require("./collections/products/products");
var media_1 = require("./collections/media");
var product_file_1 = require("./collections/product-file");
var orders_1 = require("./collections/orders");
// import { Products } from './collections/Products/Products'
// import { Media } from './collections/Media'
// import { ProductFiles } from './collections/ProductFile'
// import { Orders } from './collections/Orders'
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env'),
});
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [users_1.Users, products_1.Products, media_1.Media, product_file_1.ProductFiles, orders_1.Orders],
    routes: {
        admin: '/sell',
    },
    admin: {
        user: 'users',
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: '- DigitalHippo',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg',
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URL,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
});
