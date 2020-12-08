import {Request, Response} from "express";
import EmailService from "../service/EmailService";

class UserController{
    users = [ { name: 'Mateus', email: 'mateus@gmail.com'} ]

    async index(req: Request, res: Response){
        return res.json(this.users)
    }

    async sendEmail(req: Request, res: Response){

        const emailService = new EmailService();

        let to = {name:"mateus", email:"email"};
        let message = {subject:"mensagem"};

        let response = emailService.sendEmail(to, message);

        res.send(response)
    }

    async sendEmailDTO(req: Request, res: Response){

        const emailService = new EmailService();

        let to = {name:"mateus", email:"email"};
        let message = {subject:"mensagem"};

        let messageDTO = {to , message};

        let response = await emailService.sendEmailMessageDTO(messageDTO);

        res.send(response)
    }
}

export default UserController