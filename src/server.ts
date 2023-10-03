import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from './Utils/logger';

import router from './Routes/app.routes';


const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Middleware to enable CORS
app.use(cookieParser()); // Middleware to enable cookies
app.use(bodyParser.json()); // Middleware to enable cookies

app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.log({
        level: 'info',
        message: `Started in port ${PORT}`
    })
})