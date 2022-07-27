import { Router, Request, Response } from 'express';
import { UserController } from "./controller/UserController";

const routes = Router();

routes.get('/health', ((req: Request, res: Response) => {
    return res.send('Hello World');
}));

routes.get('/emailTest', new UserController().sendEmail);
routes.get('/emailTestDTO', new UserController().sendEmailDTO);


export default routes;
