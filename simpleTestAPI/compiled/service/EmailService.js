"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
class EmailService {
    sendEmail(to, message) {
        return `email enviado para ${to.name}: ${message.subject}`;
    }
    sendEmailMessageDTO(messageDTO) {
        return `email enviado para ${messageDTO.to.name}: ${messageDTO.message.subject}`;
    }
}
exports.EmailService = EmailService;
