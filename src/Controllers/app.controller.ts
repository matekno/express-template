import { Router } from "express";
import logger from "../Utils/logger";
import AppService from "../Services/app.service";

const AppRouter = Router();

AppRouter.get('/', async (_req, res) => {
    try {
        const answer = await AppService.getHello();
        logger.log({
            level: 'info',
            message: answer
        });
        res.send(answer);
    }
    catch (error) {
        logger.log({
            level: 'error',
            message: (error as Error).toString()
        })
        res.status(400).send((error as Error).toString());
    }
})

export default AppRouter;