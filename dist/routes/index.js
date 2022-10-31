"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = __importDefault(require("./user.routes"));
var login_routes_1 = __importDefault(require("./login.routes"));
var post_routes_1 = __importDefault(require("./post.routes"));
var routes = express_1.Router();
routes.use('/users', user_routes_1.default);
routes.use('/login', login_routes_1.default);
routes.use('/post', post_routes_1.default);
exports.default = routes;
