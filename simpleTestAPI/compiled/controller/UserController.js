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
exports.UserController = void 0;
const EmailService_1 = require("../service/EmailService");
class UserController {
    constructor() {
        this.users = [{ name: 'Mateus', email: 'mateus@gmail.com' }];
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json(this.users);
        });
    }
    sendEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailService = new EmailService_1.EmailService();
            let to = { name: "mateus", email: "email" };
            let message = { subject: "mensagem" };
            let response = emailService.sendEmail(to, message);
            res.send(response);
        });
    }
    sendEmailDTO(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailService = new EmailService_1.EmailService();
            let to = { name: "mateus", email: "email" };
            let message = { subject: "mensagem" };
            let messageDTO = { to, message };
            let response = yield emailService.sendEmailMessageDTO(messageDTO);
            res.send(response);
        });
    }
}
exports.UserController = UserController;
