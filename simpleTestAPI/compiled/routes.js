"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("./controller/UserController");
const routes = (0, express_1.Router)();
routes.get('/health', ((req, res) => {
    return res.send('Hello World');
}));
routes.get('/emailTest', new UserController_1.UserController().sendEmail);
routes.get('/emailTestDTO', new UserController_1.UserController().sendEmailDTO);
exports.default = routes;
